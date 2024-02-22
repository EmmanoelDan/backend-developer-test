import { Company } from "../../../domain/entities/Company";

export interface ICompanyRepository {
    findOne(id: string): Promise<Company | null>;
    find(): Promise<Company[]>;
}