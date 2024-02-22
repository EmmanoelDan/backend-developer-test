import { S3Client, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { SQSEvent } from "aws-lambda";
require('dotenv').config();

//configure dotenv
// dotenv.config()

const s3 = new S3Client({ region: "us-east-1" });

let cache: any = null;

export const handler = async (event: SQSEvent) => {
    const job = event.Records[0].body;

    const jobData = JSON.parse(job);
    
    let jobs: any;
    
    if (cache) {
        jobs = cache;
    } else {
        const params = {
            Bucket: process.env.BUCKET_NAME,
            Key: 'jobs.json'
        };

        const data = await s3.send(new GetObjectCommand(params));
        const buffer = await streamToBuffer(data.Body);
        jobs = JSON.parse(buffer.toString());
        
        cache = jobs;
    }

    if (jobData.status == "archived") {
        console.log("Job remove");
        const index = jobs.jobs.findIndex((j: any) => j.id === jobData.id);
        if (index !== -1) {
            jobs.jobs.splice(index, 1);
        }
    } else if (jobData.status == "published") {
        console.log("Job add");
        jobs.jobs.push(jobData);
    }
    
    const newParams = {
        Bucket: process.env.BUCKET_NAME,
        Key: 'jobs.json',
        Body: JSON.stringify(jobs)
    };
    await s3.send(new PutObjectCommand(newParams));

    console.log('Job processed successfully!');
};

async function streamToBuffer(readableStream: any): Promise<Buffer> {
    return new Promise((resolve, reject) => {
        const chunks: any[] = [];
        readableStream.on('data', (data: any) => {
            chunks.push(data instanceof Buffer ? data : Buffer.from(data));
        });
        readableStream.on('end', () => {
            resolve(Buffer.concat(chunks));
        });
        readableStream.on('error', reject);
    });
}