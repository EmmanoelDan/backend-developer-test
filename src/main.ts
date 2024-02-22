import { Api } from "./presentation/api";
import { FindCompanies } from "./application/usecases/companies/FindCompanies";
import { FindCompaniesHandler } from "./presentation/handler/company/FindCompaniesHandler";
import { FindOneCompany } from "./application/usecases/companies/FindOneCompany";
import { FindOneCompanyHandler } from "./presentation/handler/company/FindOneCompanyHandler";
import { CreateJob } from "./application/usecases/jobs/CreateJob";
import { CreateJobHandler } from "./presentation/handler/job/CreateJobHandler";
import { ArchivedJob } from "./application/usecases/jobs/ArchivedJob";
import { ArchivedJobHandler } from "./presentation/handler/job/ArchivedJobHandler";
import { PublishedJob } from "./application/usecases/jobs/PublishedJob";
import { PublishedJobHandler } from "./presentation/handler/job/PublishedJobHandler";
import { UpdatedJob } from "./application/usecases/jobs/UpdatedJob";
import { UpdateJobHandler } from "./presentation/handler/job/UpdateJobHandler";
import { DeleteJob } from "./application/usecases/jobs/DeleteJob";
import { DeleteJobHandler } from "./presentation/handler/job/DeleteJobHandler";
import { PrismaClient } from "@prisma/client";
import { PrismaCompanyRepository } from "./infra/repositories/database/prisma/PrismaCompanyRepository";
import { PrismaJobRepository } from "./infra/repositories/database/prisma/PrismaJobRepository";

export async function main(): Promise<void> {
    const _clientPrisma = new PrismaClient();
    const prismaCompanyRepo = new PrismaCompanyRepository(_clientPrisma);
    const prismaJobRepo = new PrismaJobRepository(_clientPrisma);

    // const cacheRepository = new S3CacheRepo(S3Connection.connect());
    // const feedUseCase = new FindFeed(cacheRepository)
    // const feedHandler = new FindFeedHandler(feedUseCase);

    const findCompaniesUseCase = new FindCompanies(prismaCompanyRepo);
    const findCompaniesHandler = new FindCompaniesHandler(findCompaniesUseCase);

    const findOneCompanyUseCase = new FindOneCompany(prismaCompanyRepo);
    const findOneCompanyHandler = new FindOneCompanyHandler(findOneCompanyUseCase);

    const createJobUseCase = new CreateJob(prismaJobRepo);
    const createJobHandler = new CreateJobHandler(createJobUseCase);

    const publishedJobUseCase = new PublishedJob(prismaJobRepo);
    const publishedJobHandler = new PublishedJobHandler(publishedJobUseCase);

    const updatedJobUseCase = new UpdatedJob(prismaJobRepo);
    const updatedJobHandler = new UpdateJobHandler(updatedJobUseCase);

    const archivedJobUseCase = new ArchivedJob(prismaJobRepo);
    const archivedJobHandler = new ArchivedJobHandler(archivedJobUseCase);

    const deleteJobUseCase = new DeleteJob(prismaJobRepo);
    const deleteJobHandler = new DeleteJobHandler(deleteJobUseCase);


    await Api.run(5000, findCompaniesHandler, findOneCompanyHandler, createJobHandler, publishedJobHandler, updatedJobHandler, archivedJobHandler, deleteJobHandler)
}

main()