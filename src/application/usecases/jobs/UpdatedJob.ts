import { JobData } from "../../../domain/entities/Job";
import { IJobRepository } from "../../../infra/repositories/interfaces/IJobRepository";
import { Either, left, right } from "../../helpers/Either";
import { RequiredParamsError } from "../../helpers/RequiredParamsError";

interface IRequest {
    title: string, 
    description: string, 
    location: string
}

type Response = Either<RequiredParamsError, JobData>

export class UpdatedJob {
    constructor(private _jobRepo: IJobRepository){}

    async execute(id: string, {title, description, location}: IRequest): Promise<Response>{
        const job = await this._jobRepo.find(id);

        if(!job) {
            return left(new RequiredParamsError("Job not found", 400))
        }

        const result = await this._jobRepo.update({title: title, description: description, location: location}, id)

        return right(result)
    }
}