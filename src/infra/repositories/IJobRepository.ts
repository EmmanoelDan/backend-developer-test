import { Job } from "../../domain/entities/Job";
import { JobStatus } from "../../domain/enum/JobStatus";

export interface IJobRepository {
    create(job: Job): Promise<void>
    update(id: string, title: string, description: string, location: string, notes: string): Promise<void>
    setStatusPublished(id: string, newStatus: JobStatus): Promise<void>
    find(id: string): Promise<Job | null>
    setStatusArchived(id: string, newStatus: JobStatus): Promise<void>
    delete(id: string): Promise<void>
}