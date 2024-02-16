import { json } from "stream/consumers";
import { Job } from "../../../domain/entities/Job";
import { JobStatus } from "../../../domain/enum/JobStatus";
import { IJobRepository } from "../IJobRepository";



export class InMemoryJobRepository implements IJobRepository {
    
    public jobs: Job[] = [];

    async create(job: Job): Promise<void> {
        this.jobs.push(job);
    }

    async setStatusPublished(id: string, newStatus: JobStatus): Promise<void> {
        const index = this.jobs.findIndex(x => x.id === id);

        if(index !== -1){
            if(this.jobs[index].status === JobStatus.DRAFT){
                this.jobs[index].status = newStatus
            } else {
                throw new Error("Jobs is Publish ready")
            }
        }

        this.jobs[index]
    }

    async update(id: string, title: string, description: string, location: string, notes: string): Promise<void> {
        const index = this.jobs.findIndex(x => x.id === id);

        if(index !== -1){
            this.jobs[index].title = title;
            this.jobs[index].description = description;
            this.jobs[index].location = location;
            this.jobs[index].notes = notes;
            this.jobs[index];
        }

        this.jobs[index]
    }

    async find(id: string): Promise<Job | null> {
        await this.jobs.push(
            { 
                id: 'd5167b78-5b4a-4aa3-8284-6172f8d0cc46',
                company_id: 'd5167b78-5b4a-4aa3-33s3', 
                title: 'Developer Node Senior',
                description: 'Developer Node and typescript',
                location: 'Sao luis - MA',
                notes: 'Clean code',
                status: JobStatus.DRAFT,  
                created_at: new Date, 
                updated_at: new Date
            },
            { 
                id: 'd5167b78-5b4a-4aa3-8284-6172f8d0cc45',
                company_id: 'd5167b78-5b4a-4aa3-33s3', 
                title: 'Developer Node Junior',
                description: 'Developer Node and typescript',
                location: 'Sao luis - MA',
                notes: 'Clean code',
                status: JobStatus.PUBLISHED,  
                created_at: new Date, 
                updated_at: new Date
            },
        )

        const job = await this.jobs.find(job => job.id === id);

        if(job) {
            return job;
        }
        return null;
    }

    async setStatusArchived(id: string): Promise<void> {
        const index = this.jobs.findIndex(jobStatus => jobStatus.id === id);
        if(index !== -1) {
            if(this.jobs[index].status === JobStatus.PUBLISHED){
                this.jobs[index].status = JobStatus.ARCHIVED
            }
            this.jobs[index];
        }
        this.jobs[index]
    }

    async delete(id: string): Promise<void> {
        const deleteJob = this.jobs.find(job => job.id === id);

        this.jobs = this.jobs.filter(job => job.status === JobStatus.DRAFT)
        
        this.jobs + `Deleted User: ${deleteJob?.id}`
    }
    
}