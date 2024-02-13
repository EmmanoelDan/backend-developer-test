import { Job } from "../entities/job.entity";

export interface jobRepository {
    create(company_id: string, 
        title: string, 
        description: string, 
        location: string, 
        notes: string): Promise<Job | null>

    find(): Promise<Job[]>
    updateStatus(id: string): Promise<Job | undefined>
    editPosting(id: string, title: string, description: string, location: string): Promise<Job | undefined>
    deletePosting(id: string): Promise<Job | null>
    updateStatusArchived(id: string): Promise<Job | null>
}