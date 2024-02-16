import { Company } from "../../domain/entities/Company";


export interface ICompanyRepository {
    create(company: Company): Promise<void>;
    save(company: Company): Promise<boolean>;
    findAll(): Promise<Company[]>
    find(id: string): Promise<Company | null>
}