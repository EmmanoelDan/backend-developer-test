import { Request, Response } from "express";
import { s3 } from "../../../infra/config/cache/S3Connection";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { streamToBuffer } from "../../../shared/utils/stremToBuffer";
import { Readable } from 'stream';


export class FindFeedHandler {
    async handler(req: Request ,res: Response) {
        console.log("aqui ta o erro");
        const params = {
            Bucket: "mybucketestserver",
            Key: 'jobs.json'
        };
        console.log(params);
        try {
            const data = await s3.send(new GetObjectCommand(params))

            console.log(data);
            console.log(params);

            if (data.Body instanceof Readable) {
                const buffer = await streamToBuffer(data.Body);
                const jobs = JSON.parse(buffer.toString())
    
                return res.status(200).json({ success: true, jobs: jobs.jobs }) 
            } else {
                throw new Error('Data body is not a readable stream.');
            }
            
        } catch (error) {
            console.error("Error:", error);
            return res.status(500).json({ success: false, error: "Internal Server Error" });
        }
        
    }
}