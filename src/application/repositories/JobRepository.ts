import { AppDataSource } from "../../data-source";

import { Job } from "../../domain/entities/Job";

export const jobRepository = AppDataSource.getRepository(Job);