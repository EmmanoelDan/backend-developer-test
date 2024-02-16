import { Company } from "../../domain/entities/Company";
import { ICompanyRepository } from "../../infra/repositories/ICompanyRepository";
import { Either, left, right } from "../helpers/Either";
import { RequiredParamsError } from "../helpers/RequiredParamsError";

type Response = Either<RequiredParamsError, Company>

export class GetCompanyUseCase {
    constructor(private companyRepo: ICompanyRepository) {
    }

    async execute(id: string): Promise<Response> {
        const result = await this.companyRepo.find(id);

        if(!result) {
            return left(new RequiredParamsError("Couldn't find any companies", 400))
        }
        return right(result)
    }

}