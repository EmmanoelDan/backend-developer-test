import { companyRepository } from "../repositories/CompaniesRepository";

export class CompanyUseCase {
    async list() {
        const companies = await companyRepository.find();

        return companies
    }

    async getCompany(id: string) {
        const company = await companyRepository.findOneBy({ id: id });

        return company;
    }

}