
import { CompaniesController } from "../controllers/company.controller";
import { Router } from "express";
import { JobController } from "../controllers/job.controller";

const routes = Router();

routes.get('/companies', new CompaniesController().index);

routes.get('/companies/:id', new CompaniesController().getCompany);

routes.post('/job', new JobController().create);

// endpoint teste findAll jobs
routes.get('/job', new JobController().index);

routes.put('/job/:id/publish', new JobController().updateStatus);

routes.put('/job/:id', new JobController().editPost);

routes.delete('/job/:job_id', new JobController().deletePostDraft)

routes.put('/job/:id/archived', new JobController().setStatusArchive);

export { routes }