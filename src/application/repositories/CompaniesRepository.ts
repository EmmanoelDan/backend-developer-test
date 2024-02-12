import { AppDataSource } from "../../data-source";

import { Company } from "../../domain/entities/Company";

export const companyRepository = AppDataSource.getRepository(Company);