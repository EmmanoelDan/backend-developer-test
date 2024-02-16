import { Job } from "../../domain/entities/Job";
import { IJobRepository } from "../../infra/repositories/IJobRepository";
import { Either, left, right } from "../helpers/Either";
import { RequiredParamsError } from "../helpers/RequiredParamsError";
import { JobStatus } from "../../domain/enum/JobStatus";

interface IUpdateRequest {
    id: string;
}

type Response = Either<RequiredParamsError, Job>

export class UpdateStatusJobUseCase {

    constructor(private jobRepository: IJobRepository) {}

    public async execute({
        id
    }: IUpdateRequest): Promise<Response> {
        const jobExistis = await this.jobRepository.find(id);
        if(!jobExistis) {
            return left(new RequiredParamsError("Job not found", 400))
        }

        await this.jobRepository.setStatusPublished(id, JobStatus.PUBLISHED)

        return right(jobExistis)
    }
}