import { Request, Response } from "express";
import { SetStatusArquivedUseCase } from "../../application/usecases/SetStatusArchiveUseCase";

export class SetStatusArchivedController {
    public constructor(private readonly _useCase: SetStatusArquivedUseCase){}

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