import { PrismaClient, job_status } from "@prisma/client";
import { JobData, Status } from "../../../../domain/entities/Job";
import { IUpdatedJobDTO } from "../../dto/IUpdatedJobDTO";
import { IJobRepository } from "../../interfaces/IJobRepository";

export class PrismaJobRepository implements IJobRepository {
    constructor(private _client: PrismaClient){}

    async create(company_id: string, title: string, description: string, location: string, notes: string): Promise<JobData> {
        const job = await this._client.job.create({
            data: {
                company_id: company_id,
                title: title,
                description: description,
                location: location,
                notes: notes,
            }
        })

        return job
    }
    async update({ title, description, location }: IUpdatedJobDTO, id: string): Promise<JobData> {
        const result = await this._client.job.update({
            where: {
                id: id
            },
            data: {
                title: title,
                description: description,
                location: location,
            }
        })

       return result
    }
    async find(id: string): Promise<JobData | null> {
        const result = await this._client.job.findUnique({
            where: {
                id: id
            }
        })
        return result
    }
    async setStatusPublished(id: string): Promise<JobData> {
        const result = await this._client.job.update({
            where: {
                id: id
            },
            data: { 
                status: job_status.published
            }
        })

        return result
    }

    async setStatusArchived(id: string): Promise<JobData> {
        
        const result = await this._client.job.update({
            where: {
                id: id
            },
            data: { 
                status: job_status.archived
            }
        })

        return result
    }
    async delete(id: string): Promise<JobData> {
        const result = await this._client.job.findUnique({
            where: {
                id: id
            },
        })

        if (result?.status === job_status.draft) {
            await this._client.job.delete({
                where: {
                    id
                }
            })
        }

        return result as JobData
    }
    
}