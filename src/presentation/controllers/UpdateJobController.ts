import { Request, Response } from "express";
// import { UpdateStatusJobUseCase } from "../application/usecases/UpdateStatusJobUseCase";
import { UpdateJobUseCase } from "../../application/usecases/UpdateJobUseCase";


export class UpdateJobController {
    public constructor(private readonly _useCase: UpdateJobUseCase){}

    async handle(req: Request, res: Response) {
        const { job_id } = req.params;
        const { title, description, location, notes } = req.body;

        const result = await this._useCase.execute({
           id: job_id,
           title: title,
           description: description,
           location: location,
           notes: notes, 
        })

        if(result.isLeft()) {
            return res.status(result.value.statusCode).json({message: result.value.message})
        }
        return res.json(result.value);
    }
}