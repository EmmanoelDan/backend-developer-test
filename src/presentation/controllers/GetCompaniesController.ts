import { Request, Response } from "express";
import { GetCompaniesUseCase } from "../../application/usecases/GetCompaniesUseCase";


export class CompaniesController {
    public constructor(private readonly _useCase: GetCompaniesUseCase) {}
    
    async handle(req: Request,res: Response) {
        const result = await this._useCase.execute();

        if(result.isLeft()) {
            return res.status(result.value.statusCode).json({message: result.value.message})
        }
        return res.json(result.value);
    }
}