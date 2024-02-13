import { Repository } from "typeorm";
import { CompanyRepository } from "../repositories/company.repository";
import { Company } from "../entities/company.entity";
import { AppDataSource } from "../data-source";

export class CompanyUseCase implements CompanyRepository {
    private repository: Repository<Company>;

    constructor() {
        this.repository = AppDataSource.getRepository(Company);
    }
    async find(): Promise<Company[]> {
        return this.repository.find()
    }
    
    
    async findById(id: string): Promise<Company | null> {
        const company = this.repository.findOne({where: { id}})
        console.log(company)
        return company
    }
    
}