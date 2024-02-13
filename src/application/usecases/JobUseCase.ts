import { jobRepository } from "../repositories/JobRepository";

export class JobUseCase {
    async createJob(company_id: string, title: string, description: string,location: string, notes: string, status: string) {
        const newJob = jobRepository.create({ company_id, title, description, location, notes, status})
        const result = await jobRepository.save(newJob);
        return result
    }

    async publishJob(job_id: string, status: string) {
        

    }
}