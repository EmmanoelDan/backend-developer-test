import { v4 as uuidV4 } from "uuid";
import { Company } from "./Company";
import { job_status } from "@prisma/client";

export enum Status {
    "draft",
    "published",
    "archived",
    "rejected",
}

export class JobData {
    public status?: job_status | Status
    public id?: string
    

    public constructor(
        public company_id?: string,
        public title?: string,
        public description?: string,
        public location?: string,
        public notes?: string,
        status?: job_status,
        public created_at?: Date,
        public updated_at?: Date,
    ){
        if(!this.id) {
            this.id = uuidV4();
        }

        this.status = status;
    }
}

export interface JobCompany extends JobData {
    company: Company
}