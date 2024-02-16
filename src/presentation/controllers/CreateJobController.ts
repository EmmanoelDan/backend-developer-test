import { Request, Response } from "express";
import { CreateJobUseCase } from "../../application/usecases/CreateJobUseCase";
import { randomUUID } from "crypto";
import { JobStatus } from "../../domain/enum/JobStatus";


export class CreateJobController {
    public constructor(private readonly _useCase: CreateJobUseCase){}

    async handle(req: Request, res: Response) {
        const { title, description, location, notes} = req.body;
        const { company_id} = req.params;

        const job = await this._useCase.execute({
            id: randomUUID(),
            company_id: company_id,
            title: title,
            description: description,
            location: location,
            notes: notes,
            status: JobStatus.DRAFT,
            created_at: new Date(),
            updated_at: new Date()
        })

        if(job.isLeft()) {
            return res.status(job.value.statusCode).json({message: job.value.message})
        }

        return res.json(job.value);
    }
}