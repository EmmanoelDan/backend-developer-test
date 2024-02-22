import { SQSClient } from "@aws-sdk/client-sqs";
import { JobData } from "../../../domain/entities/Job";
import { IReadJob } from "../../../infra/repositories/interfaces/IReadJob";
import { IJobRepository } from "../../../infra/repositories/interfaces/IJobRepository";


export class ReadJob implements IReadJob {
    constructor(
        private jobRepository: IJobRepository
    ) {}
    async read(job: JobData): Promise<void> {
        
    }
    
}