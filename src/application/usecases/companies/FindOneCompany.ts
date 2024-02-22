import { Company } from "../../../domain/entities/Company";
import { ICompanyRepository } from "../../../infra/repositories/interfaces/ICompanyRepository ";
import { Either, left, right } from "../../helpers/Either";
import { RequiredParamsError } from "../../helpers/RequiredParamsError";

type Response = Either<RequiredParamsError, Company>

export class FindOneCompany {
    constructor(private _companyRepository: ICompanyRepository){}

    async execute(id: string): Promise<Response> {
        const result = await this._companyRepository.findOne(id);

        if(!result) {
            return left(new RequiredParamsError("Couldn't find any companies", 400))
        }
        return right(result)
    }
}