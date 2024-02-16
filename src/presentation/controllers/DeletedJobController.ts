import { Request, Response } from "express";
import { DeleteJobUseCase } from "../../application/usecases/DeleteJobUseCase";


export class DeleteJobController {
    public constructor(private readonly _useCase: DeleteJobUseCase){}

    async handle(req: Request, res: Response) {
        const { job_id } = req.params;

        const result = await this._useCase.execute({
           id: job_id,
        })

        if(result.isLeft()) {
            return res.status(result.value.statusCode).json({message: result.value.message})
        }
        return res.json(result.value);
    }
}