import { Company } from "../../entities/company.entity";
import { CompanyRepository } from "../company.repository";


export class InMemoryCompanyRepository implements CompanyRepository {
    public items: Company[] = [];

    findById(id: string): Promise<Company | null> {
        const company: any = this.items.find(company => company.id === id);
        return company || null;
    }
    async find(): Promise<Company[]> {
        return this.items
    }

}