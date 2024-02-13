import {Request, Response} from 'express';
import { JobUseCase } from '../application/usecases/JobUseCase';

export class JobController {
    async create(request: Request, response: Response) {
        const {title, description,location, notes, status } = request.body
        const company_id = request.query.company_id as string

        const job = new JobUseCase
        const result = await job.createJob(company_id,title,description,location,notes,status)

        return response.status(201).json(result)
    }
}