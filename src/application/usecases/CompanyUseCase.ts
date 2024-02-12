import { Company } from "../../domain/entities/Company";
import { companyRepository } from "../repositories/CompaniesRepository";

export class CompanyUseCase {
    async list() {
        const companies = await companyRepository.find();

        return companies
    }
}