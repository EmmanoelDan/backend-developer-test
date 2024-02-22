import { Request, Response } from "express";
import { ArchivedJob } from "../../../application/usecases/jobs/ArchivedJob";

export class ArchivedJobHandler {
    public constructor(private readonly _useCase: ArchivedJob){}

    async handle(req: Request, res: Response) {
        const { job_id } = req.params;

        const result = await this._useCase.execute(job_id)

        if(result.isLeft()) {
            return res.status(result.value.statusCode).json({message: result.value.message})
        }
        return res.json(result.value);

    }
}