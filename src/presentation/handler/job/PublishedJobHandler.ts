import { Request, Response } from "express";
import { PublishedJob } from "../../../application/usecases/jobs/PublishedJob";


export class PublishedJobHandler {
    public constructor(private readonly _useCase: PublishedJob){}

    async handle(req: Request, res: Response) {
        const { job_id } = req.params;

        const result = await this._useCase.execute(job_id)

        if(result.isLeft()) {
            return res.status(result.value.statusCode).json({message: result.value.message})
        }
        return res.json(result.value);
    }
}