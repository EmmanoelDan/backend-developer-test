import { SQSClient } from '@aws-sdk/client-sqs'
import * as dotenv from "dotenv";
dotenv.config();

export const sqs = new SQSClient({
    region: process.env.AWS_REGION,

    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string
    }
})
