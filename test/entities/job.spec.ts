import {expect, test} from "vitest"
import {Job} from "../../src/domain/entities/job.entity"


test('create a new job', () => {
    const job = new Job();
    job.company_id = 'a45d0-sd4mkfg-sdikr47';
    job.title = 'Job Title';
    job.description = 'Job Description';
    job.location = 'Colorado State University';
    job.notes = 'Job Description';

    expect(job).toBeInstanceOf(Job);
    expect(job.title).toBe('Job Title');
})