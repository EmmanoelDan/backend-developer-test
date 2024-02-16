import { Job } from "../../domain/entities/Job";
import { IJobRepository } from "../../infra/repositories/IJobRepository";
import { Either, left, right } from "../helpers/Either";
import { RequiredParamsError } from "../helpers/RequiredParamsError";

interface IDeleteRequest {
    id: string;
}

type Response = Either<RequiredParamsError, Job>

export class DeleteJobUseCase {

    constructor(private jobRepository: IJobRepository) {}

    public async execute({
        id
    }: IDeleteRequest): Promise<Response> {
        const jobExistis = await this.jobRepository.find(id);
        if(!jobExistis) {
            return left(new RequiredParamsError("Job not found", 400))
        }

        await this.jobRepository.delete(id)

        return right(jobExistis)
    }
}