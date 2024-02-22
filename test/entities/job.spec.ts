import {expect, test} from "vitest"
import {Job} from "../../src/domain/entities/Job"
import { Status } from "../../src/domain/enum/JobStatus";


test('create a new job', () => {
    const job: Job = { 
        id: 'd5167b78-5b4a-4aa3-8284-6172f8d0cc46',
        company_id: 'd5167b78-5b4a-4aa3-33s3', 
        title: 'Developer Node Senior',
        description: 'Developer Node and typescript',
        location: 'Sao luis - MA',
        notes: 'Clean code',
        status: Status.DRAFT,  
        created_at: new Date, 
        updated_at: new Date
    }
    ;
    

    expect(job)
    expect(job.title).toBe('Developer Node Senior');
})