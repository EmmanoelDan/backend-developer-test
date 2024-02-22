import { JobData, Status } from "../../../domain/entities/Job";
import { IJobRepository } from "../../../infra/repositories/interfaces/IJobRepository";
import { Either, left, right } from "../../helpers/Either";
import { RequiredParamsError } from "../../helpers/RequiredParamsError";
import { sqs } from "../../../infra/config/queue/sqsConnect";
import { SendMessageCommand } from "@aws-sdk/client-sqs";
type Response = Either<RequiredParamsError, JobData>
import * as dotenv from "dotenv";
dotenv.config();

export class PublishedJob {
    constructor (private _jobRepo: IJobRepository){}

    async execute(id: string): Promise<Response> {
        const job = await this._jobRepo.find(id)

        if(!job) {
            return left(new RequiredParamsError("Job not found", 400))
        }

        if(job.status != 'draft') {
            return left(new RequiredParamsError("Job Status not DRAFT", 400))
        }

        const result = await this._jobRepo.setStatusPublished(id)

        const cmd = new SendMessageCommand({
            QueueUrl: process.env.AWS_QUEUE_URL,
            MessageBody: JSON.stringify(result)
        })

        await sqs.send(cmd).then(data => {
            console.log(`Message sent to the queue: ${data.MessageId}`)
        })
        .catch(error => {
            console.error(error, error.stack)
        })

        return right(result)
    }
}