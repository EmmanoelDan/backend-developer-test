import { Request, Response } from "express";
import { CreateJob } from "../../../application/usecases/jobs/CreateJob";

export class CreateJobHandler{
    public constructor(private readonly _useCase: CreateJob){}

    async handle(req: Request, res: Response) {
        const { company_id, title, description, location, notes} = req.body;

        const job = await this._useCase.execute({
            company_id: company_id,
            title: title,
            description: description,
            location: location,
            notes: notes,
        })

        if(job.isLeft()) {
            return res.status(job.value.statusCode).json({message: job.value.message})
        }

        return res.json(job.value);
    }
}