
import { CompaniesController } from "../controllers/CompaniesController";
import { Router } from "express";

const routes = Router();

routes.get('/companies', new CompaniesController().handle);

export { routes }