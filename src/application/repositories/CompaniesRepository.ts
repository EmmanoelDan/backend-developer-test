// import { AppDataSource } from "../../database/typeorm/data-source";

import { Repository } from "typeorm";
import { CompanyRepositoryInterface } from "../../domain/CompanyRepositoryInterface";
import { Company } from "../../domain/entities/Company";
import { AppDataSource } from "../../data-source";

// import { Company } from "../../domain/entities/Company";

// export const companyRepository = AppDataSource.getRepository(Company);

export class CompanyRepository implements CompanyRepositoryInterface {
    private repository: Repository<Company>;

    constructor() {
        this.repository = AppDataSource.getRepository(Company);
    }
    async find(): Promise<Company[]> {
        return this.repository.find()
    }
    
    
    async findById(id: string): Promise<Company | null> {
        return this.repository.findOne({where: { id}})
    }
    
}