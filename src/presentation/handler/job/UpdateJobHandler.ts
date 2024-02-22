import { Request, Response } from "express";
import { UpdatedJob } from "../../../application/usecases/jobs/UpdatedJob";
// import { UpdateStatusJobUseCase } from "../application/usecases/UpdateStatusJobUseCase";

export class UpdateJobHandler {
    public constructor(private readonly _useCase: UpdatedJob){}

    async handle(req: Request, res: Response) {
        const { job_id } = req.params;
        const { title, description, location, notes } = req.body;

        const result = await this._useCase.execute(job_id, {
           title: title,
           description: description,
           location: location,
        })

        if(result.isLeft()) {
            return res.status(result.value.statusCode).json({message: result.value.message})
        }
        return res.json(result.value);
    }
}