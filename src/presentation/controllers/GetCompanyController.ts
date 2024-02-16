import { Request, Response } from "express";
import { GetCompanyUseCase } from "../../application/usecases/GetCompanyUseCase";


export class GetCompanyController {
    public constructor(private readonly _useCase: GetCompanyUseCase) {}
    
    async handle(req: Request,res: Response) {
        const {id} = req.params
        const result = await this._useCase.execute(id);

        if(result.isLeft()) {
            return res.status(result.value.statusCode).json({message: result.value.message})
        }

        return res.json(result.value);
    }
}