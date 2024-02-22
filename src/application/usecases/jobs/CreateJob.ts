import { JobData } from "../../../domain/entities/Job";
import { IJobRepository } from "../../../infra/repositories/interfaces/IJobRepository";
import { Either, right } from "../../helpers/Either";
import { RequiredParamsError } from "../../helpers/RequiredParamsError";

interface IRequest {
    company_id: string, 
    title: string, 
    description: string, 
    location: string, 
    notes: string
}

type Response = Either<RequiredParamsError, JobData>

export class CreateJob {
    constructor (private _jobRepo: IJobRepository){}

    async execute({company_id, title, description, location, notes}: IRequest): Promise<Response> {

        const job = await this._jobRepo.create(company_id, title, description, location, notes)

        return right(job)
    }
}