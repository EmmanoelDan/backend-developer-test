import { S3Client } from '@aws-sdk/client-s3'

import * as dotenv from "dotenv";
dotenv.config();

export const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string
    }
})