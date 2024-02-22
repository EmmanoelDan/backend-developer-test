import express from 'express';
import { FindCompaniesHandler } from './handler/company/FindCompaniesHandler';
import { FindOneCompanyHandler } from './handler/company/FindOneCompanyHandler';
import { CreateJobHandler } from './handler/job/CreateJobHandler';
import { UpdateJobHandler } from './handler/job/UpdateJobHandler';
import { PublishedJobHandler } from './handler/job/PublishedJobHandler';
import { ArchivedJobHandler } from './handler/job/ArchivedJobHandler';
import { DeleteJobHandler } from './handler/job/DeleteJobHandler';
import { FindFeedHandler } from './handler/feed/FindFeedHandler';
import apicache from 'apicache';

let cache = apicache.middleware

export class Api {
    public static async run(port: number, 
        getCompaniesController: FindCompaniesHandler, 
        getCompany: FindOneCompanyHandler,
        createJobController: CreateJobHandler,
        updatedStatusPublishController: PublishedJobHandler,
        updateJobController: UpdateJobHandler,
        setStatusArchivedController: ArchivedJobHandler,
        deleteJobController: DeleteJobHandler,
        ): Promise<void> {
        const app = express();

        app.use(express.json());

        app.get('/company', (req, res) => getCompaniesController.handler(req, res));
        app.get('/company/:id', (req, res) => getCompany.handle(req, res))
        app.post('/job', (req, res) => createJobController.handle(req, res));
        app.put('/job/:job_id/publish', (req, res) => updatedStatusPublishController.handle(req, res));
        app.put('/job/:job_id', (req, res) => updateJobController.handle(req, res));
        app.delete('/job/:job_id', (req, res) => deleteJobController.handle(req, res));
        app.put('/job/:job_id/archived', (req, res) => setStatusArchivedController.handle(req, res));
        app.get('/feed', cache('1 minutes'), new FindFeedHandler().handler)

        app.listen(port, () => {
            console.log('listening on port ' + port);
        })
    }
}