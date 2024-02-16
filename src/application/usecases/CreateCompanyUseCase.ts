import { Company } from "../../domain/entities/Company";
import { ICompanyRepository } from "../../infra/repositories/ICompanyRepository";
import { Either, left, right } from "../helpers/Either";
import { RequiredParamsError } from "../helpers/RequiredParamsError";

interface ICreateCompanyRequest {
    id: string;
    name: string;
    created_at: Date;
    updated_at: Date;
}

type Response = Either<RequiredParamsError, Company>

export class CreateCompanyUseCase {
    constructor(private companyRepository: ICompanyRepository){}

    public async execute({
        id, name, created_at, updated_at
    }: ICreateCompanyRequest): Promise<Response>{

        const company = new Company(
            id,
            name,
            created_at,
            updated_at
        )

        if (company) {
            return left(new RequiredParamsError("job ready exists!", 400))
        }

        await this.companyRepository.create(company);

        return right(company);
    }
}