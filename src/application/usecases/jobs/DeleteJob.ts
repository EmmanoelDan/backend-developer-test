import { JobData, Status } from "../../../domain/entities/Job";
import { IJobRepository } from "../../../infra/repositories/interfaces/IJobRepository";
import { Either, left, right } from "../../helpers/Either";
import { RequiredParamsError } from "../../helpers/RequiredParamsError";

type Response = Either<RequiredParamsError, JobData>

export class DeleteJob {
    constructor(private _jobRepo: IJobRepository){}

    async execute(id: string): Promise<Response> {
        const job = await this._jobRepo.find(id);

        if(!job) {
            return left(new RequiredParamsError("Job not found", 400))
        }

        if(job.status != Status.draft) {
            return left(new RequiredParamsError("Status not draft", 400))
        }


        await this._jobRepo.delete(id)

        return right(job)
    }
}