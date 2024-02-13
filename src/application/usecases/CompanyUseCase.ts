import { CompanyRepository } from "../repositories/CompaniesRepository";

export class CompanyUseCase {
    async list() {
        const companies = new CompanyRepository();
        const result = await companies.find();

        return result
    }

    async getCompany(id: string) {
        const company = new CompanyRepository();
        const result = await company.findById(id);

        return result;
    }

}