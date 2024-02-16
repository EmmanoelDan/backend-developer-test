import { CreateCompanyUseCase } from "./application/usecases/CreateCompanyUseCase";
import { CreateJobUseCase } from "./application/usecases/CreateJobUseCase";
import { DeleteJobUseCase } from "./application/usecases/DeleteJobUseCase";
import { GetCompaniesUseCase } from "./application/usecases/GetCompaniesUseCase";
import { GetCompanyUseCase } from "./application/usecases/GetCompanyUseCase";
import { SetStatusArquivedUseCase } from "./application/usecases/SetStatusArchiveUseCase";
import { UpdateJobUseCase } from "./application/usecases/UpdateJobUseCase";
import { UpdateStatusJobUseCase } from "./application/usecases/UpdateStatusJobUseCase";
import { InMemoryCompanyRepository } from "./infra/repositories/in-memory/InMemoryCompanyRepository";
import { InMemoryJobRepository } from "./infra/repositories/in-memory/InMemoryJobRepository";
import { CreateJobController } from "./presentation/controllers/CreateJobController";
import { DeleteJobController } from "./presentation/controllers/DeletedJobController";
import { CompaniesController } from "./presentation/controllers/GetCompaniesController";
import { GetCompanyController } from "./presentation/controllers/GetCompanyController";
import { SetStatusArchivedController } from "./presentation/controllers/SetStatusArchivedController";
import { UpdateJobController } from "./presentation/controllers/UpdateJobController";
import { UpdateStatusController } from "./presentation/controllers/UpdateStatusController";
import { Api } from "./presentation/api";

export async function main(): Promise<void> {
    const inMemoryCompanyRepo = new InMemoryCompanyRepository();
    const createCompanyUseCase = new CreateCompanyUseCase(inMemoryCompanyRepo);
    const inMemoryJobRepo = new InMemoryJobRepository();

    // Get all companies use cases
    const getCompaniesUseCase = new GetCompaniesUseCase(inMemoryCompanyRepo);
    const getCompaniesController = new CompaniesController(getCompaniesUseCase);
    // Get By Company Use Case
    const getCompanyUseCase = new GetCompanyUseCase(inMemoryCompanyRepo)
    const getCompanyController = new GetCompanyController(getCompanyUseCase)
    // Create Job Use Case
    const createJobUseCase = new CreateJobUseCase(inMemoryJobRepo);
    const createJobController = new CreateJobController(createJobUseCase);
    // Update Status 
    const updatedStatusPublishUseCase = new UpdateStatusJobUseCase(inMemoryJobRepo);
    const updatedStatusPublishController = new UpdateStatusController(updatedStatusPublishUseCase);
    // update job use case
    const updateJobUseCase = new UpdateJobUseCase(inMemoryJobRepo)
    const updateJobController = new UpdateJobController(updateJobUseCase)
    // update archive use case
    const updateArchiveUseCase = new SetStatusArquivedUseCase(inMemoryJobRepo);
    const updateArchiveController = new SetStatusArchivedController(updateArchiveUseCase)
    // delete job use case
    const deleteJobUseCase = new DeleteJobUseCase(inMemoryJobRepo)
    const deleteJobController = new DeleteJobController(deleteJobUseCase)

    await Api.run(5000, getCompaniesController, getCompanyController, createJobController, updatedStatusPublishController, updateJobController, updateArchiveController, deleteJobController)
}

main()