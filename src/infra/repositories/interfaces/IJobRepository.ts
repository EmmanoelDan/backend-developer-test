import { JobData } from "../../../domain/entities/Job"
import { IUpdatedJobDTO } from "../dto/IUpdatedJobDTO"

export interface IJobRepository {
    create(company_id: string, title: string, description: string, location: string, notes: string): Promise<JobData>
    update({title, description, location}: IUpdatedJobDTO, id: string): Promise<JobData>
    find(id: string): Promise<JobData | null>
    setStatusArchived(id: string): Promise<JobData>
    setStatusPublished(id: string): Promise<JobData>
    delete(id: string): Promise<JobData>
}