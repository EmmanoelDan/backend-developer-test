import { randomUUID } from "crypto";
import { Company } from "../../../domain/entities/Company";
import { ICompanyRepository } from "../ICompanyRepository";



export class InMemoryCompanyRepository implements ICompanyRepository {
    
    public companies: Company[] = [];
    
    async create(company: Company): Promise<void> {
        this.companies.push(company);
    }

    async save(company: Company): Promise<boolean> {
        this.companies.push(company);
        return true;
    }

    async findAll(): Promise<Company[]> {
        await this.companies.push(
            { id: randomUUID(), name: 'ABC Corp',  created_at: new Date, updated_at: new Date},
            { id: randomUUID(), name: 'XYZ LLC', created_at: new Date, updated_at: new Date},
            { id: randomUUID(), name: 'ACME Enterprises', created_at: new Date, updated_at: new Date},
        )
        return this.companies
    }

    async find(id: string): Promise<Company | null> {

        await this.companies.push(
            { id: 'd5167b78-5b4a-4aa3-8284-6172f8d0cc46', name: 'ABC Corp',  created_at: new Date, updated_at: new Date},
            { id: randomUUID(), name: 'XYZ LLC', created_at: new Date, updated_at: new Date},
            { id: randomUUID(), name: 'ACME Enterprises', created_at: new Date, updated_at: new Date},
        )

        const company = await this.companies.find(company => company.id === id);

        if(company) {
            return company;
        }
        return null;
    }
}