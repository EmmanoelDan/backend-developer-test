import { Company } from "../../../domain/entities/Company";
import { ICompanyRepository } from "../../../infra/repositories/interfaces/ICompanyRepository ";
import { Either, left, right } from "../../helpers/Either";
import { RequiredParamsError } from "../../helpers/RequiredParamsError";

type Response = Either<RequiredParamsError, Company[]>

export class FindCompanies {
    constructor(private _companyRepository: ICompanyRepository){}

    async execute(): Promise<Response> {
        const result = await this._companyRepository.find();

        if(result.length === 0) {
            return left(new RequiredParamsError("Couldn't find any companies", 400))
        }
        
        return right(result);
    }
}