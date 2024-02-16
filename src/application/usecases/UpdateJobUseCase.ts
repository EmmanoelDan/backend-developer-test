import { Job } from "../../domain/entities/Job";
import { IJobRepository } from "../../infra/repositories/IJobRepository";
import { Either, left, right } from "../helpers/Either";
import { RequiredParamsError } from "../helpers/RequiredParamsError";

interface IUpdateRequest {
    id: string;
    title: string;
    description: string;
    location: string;
    notes: string
}

type Response = Either<RequiredParamsError, Job>

export class UpdateJobUseCase {

    constructor(private jobRepository: IJobRepository) {}

    public async execute({
        id, title, description, location, notes
    }: IUpdateRequest): Promise<Response> {
        const jobExistis = await this.jobRepository.find(id);

        
        if(!jobExistis) {
            return left(new RequiredParamsError("Job not found", 400))
        }

        await this.jobRepository.update(id, title, description, location, notes)

        return right(jobExistis)
    }
}