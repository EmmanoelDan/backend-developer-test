
import { CompaniesController } from "../controllers/CompaniesController";
import { Router } from "express";
import { JobController } from "../controllers/JobController";

const routes = Router();

routes.get('/companies', new CompaniesController().index);

routes.get('/companies/:id', new CompaniesController().getCompany);

routes.post('/job', new JobController().create);

routes.put('/job/:job_id/pusblish', new JobController().create);

export { routes }