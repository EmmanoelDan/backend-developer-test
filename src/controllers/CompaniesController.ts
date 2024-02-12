import { Request, Response } from 'express'
import { CompanyUseCase } from '../application/usecases/CompanyUseCase'

export class CompaniesController {
    async index(request: Request, response: Response){
        const companies = new CompanyUseCase;
        const result = await companies.list();

        response.status(200).json(result);
    }

    async getCompany(request: Request, response: Response ) {
        const {id} = request.params
        const company = new CompanyUseCase;
        const result = await company.getCompany(id)

        response.status(200).json(result);
    }
}