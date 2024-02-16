import { Job } from "../../domain/entities/Job";
import { IJobRepository } from "../../infra/repositories/IJobRepository";
import { Either, left, right } from "../helpers/Either";
import { RequiredParamsError } from "../helpers/RequiredParamsError";
import { JobStatus } from "../../domain/enum/JobStatus";

interface ICreateJobRequest {
    id: string;
    company_id: string;
    title: string;
    description: string;
    location: string;
    notes: string;
    status: JobStatus.DRAFT;
    created_at: Date;
    updated_at: Date;
}

type Response = Either<RequiredParamsError, Job>

export class CreateJobUseCase {
    constructor(private jobRepository: IJobRepository) {}

    public async execute({
        id, company_id, 
        title, description, 
        location, notes, 
        status, created_at, 
        updated_at
    }: ICreateJobRequest): Promise<Response> {

        const alreadyExists = await this.jobRepository.find(id)

        if (alreadyExists) {
            return left(new RequiredParamsError("job ready exists!", 400))
        }

        const job = new Job(
            id, company_id, 
            title, description, 
            location, notes, 
            status, created_at, 
            updated_at
        )

        await this.jobRepository.create(job)

        return right(job)
    }
}