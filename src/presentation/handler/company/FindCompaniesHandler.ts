import { Request, Response } from "express";
import { FindCompanies } from "../../../application/usecases/companies/FindCompanies";


export class FindCompaniesHandler {
    constructor(private _companyUseCase: FindCompanies){}
    async handler(req: Request, res: Response) {
        const result = await this._companyUseCase.execute();

        if(result.isLeft()){
            return res.status(result.value.statusCode).json({message: result})
        }

        return res.json(result.value)
    }

}