import { Company } from "./entities/Company";

export interface CompanyRepositoryInterface {
    findById(id: string): Promise<Company | null>
    find(): Promise<Company[]>
}