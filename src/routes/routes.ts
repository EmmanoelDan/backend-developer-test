
import { CompaniesController } from "../controllers/CompaniesController";
import { Router } from "express";

const routes = Router();

routes.get('/companies', new CompaniesController().index);

routes.get('/companies/:id', new CompaniesController().getCompany);

export { routes }