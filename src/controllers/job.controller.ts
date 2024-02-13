import {Request, Response} from 'express';
//import { JobUseCase } from '../application/usecases/JobUseCase';
import { JobUseCase } from '../use-cases/job.usecase';

export class JobController {
    async create(request: Request, response: Response) {
        const {title, description, location, notes } = request.body
        const company_id = request.query.company_id as string

        const job = new JobUseCase()
        const result = await job.create(company_id, title, description, location, notes)

        return response.status(201).json(result)
    }

    async index(request: Request, response: Response) {
        const companies = new JobUseCase;
        const result = await companies.find();

        response.status(200).json(result);
    }

    async updateStatus(request: Request, response: Response) {
        const {id} = request.params
        const status = new JobUseCase
        const result = await status.updateStatus(id)

        response.status(200).json(result)
    }

    async editPost(request: Request, response: Response) {
        const {id} = request.params
        const {title, description, location} = request.body

        const edit = new JobUseCase
        const result = await edit.editPosting(id, title, description,location)

        response.status(200).json(result)
    }

    async deletePostDraft(request: Request, response: Response) {
        const {job_id} = request.params

        const deletePost = new JobUseCase
        const result = await deletePost.deletePosting(job_id)

        response.status(200).json(result)

    }

    async setStatusArchive(request: Request, response: Response) {
        const  {id} = request.params

        const setStatus = new JobUseCase
        const result = await setStatus.updateStatusArchived(id);

        response.status(200).json(result)
    }
}