import { v4 as uuidV4 } from "uuid";

export class Company {
    id?: string
    name!: string
    created_at!: Date
    updated_at!: Date

    constructor(){

        if(!this.id) {
            this.id = uuidV4();
        }
    }
}