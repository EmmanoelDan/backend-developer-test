import { Job, Status } from "../../entities/job.entity";
import { jobRepository } from "../job.repository";


export class InMemoryJobRepository implements jobRepository {
    public items: Job[] = [];

    async create(company_id: string, title: string, description: string, location: string, notes: string): Promise<Job | null> {
        const newJob: Job = {
            company_id: company_id,
            title: title,
            description: description,
            location: location,
            notes: notes
        };
        this.items.push(newJob);
        return newJob
    }
    async find(): Promise<Job[]> {
        return this.items
    }
    async updateStatus(id: string): Promise<Job | undefined> {
        const index = this.items.findIndex(jobStatus => jobStatus.id === id);
        if(index !== -1) {
            if(this.items[index].status === Status.DRAFT) {
                this.items[index].status = Status.PUBLISHED
            }
            return this.items[index];
        }
        return undefined
    }
    async editPosting(id: string, title: string, description: string, location: string): Promise<Job | undefined> {
        const index = this.items.findIndex(editPost => editPost.id === id);
        if(index !== -1) {
            this.items[index].title = title;
            this.items[index].description = description;
            this.items[index].location = location
            return this.items[index];
        }
        return undefined
    }
    async deletePosting(id: string): Promise<Job | null> {
       const deleteJob = this.items.find(job => job.id === id);
       this.items = this.items.filter(job => job.status === Status.DRAFT)

       return deleteJob || null

    }
    async updateStatusArchived(id: string): Promise<Job | null> {
        const index = this.items.findIndex(jobStatus => jobStatus.id === id);
        if(index !== -1) {
            if(this.items[index].status === Status.PUBLISHED){
                this.items[index].status = Status.ARCHIVED
            }
            return this.items[index];
        }
        return null
    }
    
}