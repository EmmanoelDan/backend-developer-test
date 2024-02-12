import { Request, Response } from 'express'
import { CompanyUseCase } from '../application/usecases/CompanyUseCase'

export class CompaniesController {
    async handle(request: Request, response: Response){
        const companies = new CompanyUseCase;
        const result = await companies.list();

        response.status(200).json(result);
    }
}