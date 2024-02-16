import { JobStatus } from "../enum/JobStatus";

export class Job {
    public status?: JobStatus;

    public constructor(
        public id: string,
        public company_id: string,
        public title: string,
        public description: string,
        public location: string,
        public notes: string,
        status: JobStatus,
        public readonly created_at: Date,
        public readonly updated_at: Date
    ){
        this.status = status;
    }
}