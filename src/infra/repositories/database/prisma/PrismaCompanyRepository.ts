import { PrismaClient } from "@prisma/client";
import { ICompanyRepository } from "../../interfaces/ICompanyRepository ";
import { Company } from "../../../../domain/entities/Company";

export class PrismaCompanyRepository implements ICompanyRepository {
    constructor(private _client: PrismaClient){}

    async findOne(id: string): Promise<Company | null> {
        const result = await this._client.company.findUnique({
            where: {
                id: id
            }
        })

        return result
    }
    async find(): Promise<Company[]> {
        const result = await this._client.company.findMany();

        return result
    }
}