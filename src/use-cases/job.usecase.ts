import { Repository } from "typeorm";
import { jobRepository } from "../repositories/job.repository";
import { Job, Status } from "../entities/job.entity";
import { AppDataSource } from "../data-source";


export class JobUseCase implements jobRepository {
    private repository: Repository<Job>;

    constructor() {
        this.repository = AppDataSource.getRepository(Job);
    }
    async updateStatusArchived(id: string): Promise<Job | null> {
        const updateStatus: Pick<Job, 'status'> | null = await this.repository.findOne({
            where: {id},
            select: [ 'status']
        });
        if(!updateStatus) {
            return null;
        }
        const status = updateStatus?.status == Status.PUBLISHED ? Status.ARCHIVED : updateStatus.status;

        await this.repository.update(id, { status: status});

        const updatedJob = await this.repository.findOne({where: {id}})
        // await this.repository.save(updateStatus);
        
        return updatedJob || null;
    }
    // Delete a job posting draft
    async deletePosting(id: string): Promise<Job | null> {
        const job: Pick<Job, 'status'> | null = await this.repository.findOne({
            where: {id},
            select: [ 'status']
        });

        if(!job) {
            return null;
        }

        console.log(job.status);

        if(job?.status == Status.DRAFT) {
            const result = await this.repository.delete(id);

            return result.raw;
        }

        return null;
    }
    async editPosting(id: string, title: string, description: string, location: string): Promise<Job | undefined> {
        const existsJobId: Pick<Job, 'status'> | null = await this.repository.findOne({
            where: {id}
        });

        if(!existsJobId) {
            return undefined
        }

        await this.repository.update(id, { title: title, description: description, location: location})

        const newPost = await this.repository.findOne({where: { id}});

        return newPost || undefined
    }
    async updateStatus(id: string): Promise<Job | undefined> {
        const updateStatus: Pick<Job, 'status'> | null = await this.repository.findOne({
            where: {id},
            select: [ 'status']
        });
        if(!updateStatus) {
            return undefined;
        }
        const status = updateStatus?.status == Status.DRAFT ? Status.PUBLISHED : updateStatus.status;

        await this.repository.update(id, { status: status});

        const updatedJob = await this.repository.findOne({where: {id}})
        // await this.repository.save(updateStatus);
        
        return updatedJob || undefined;
        // throw new Error("Method not implemented.");
    }
      
    find(): Promise<Job[]> {
        return this.repository.find();
    }
    
    async create(company_id: string, title: string, description: string, location: string, notes: string): Promise<Job | null> {
        const Job = this.repository.create({company_id, title, description, location, notes})
        await this.repository.save(Job)
        return Job
    }
    
}