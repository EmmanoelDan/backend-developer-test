import express from 'express';
import { CompaniesController } from './controllers/GetCompaniesController';
import { GetCompanyController } from './controllers/GetCompanyController';
import { CreateJobController } from './controllers/CreateJobController';
import { UpdateStatusController } from './controllers/UpdateStatusController';
import { UpdateJobController } from './controllers/UpdateJobController';
import { SetStatusArchivedController } from './controllers/SetStatusArchivedController';
import { DeleteJobController } from './controllers/DeletedJobController';

export class Api {
    public static async run(port: number, 
        getCompaniesController: CompaniesController, 
        getCompany: GetCompanyController,
        createJobController: CreateJobController,
        updatedStatusPublishController: UpdateStatusController,
        updateJobController: UpdateJobController,
        setStatusArchivedController: SetStatusArchivedController,
        deleteJobController: DeleteJobController
        ): Promise<void> {
        const app = express();

        app.use(express.json());

        app.get('/company', (req, res) => getCompaniesController.handle(req, res));
        app.get('/company/:id', (req, res) => getCompany.handle(req, res))
        app.post('/job', (req, res) => createJobController.handle(req, res));
        app.put('/job/:job_id/publish', (req, res) => updatedStatusPublishController.handle(req, res));
        app.put('/job/:job_id', (req, res) => updateJobController.handle(req, res));
        app.delete('/job/:job_id', (req, res) => deleteJobController.handle(req, res));
        app.put('/job/:job_id/archived', (req, res) => setStatusArchivedController.handle(req, res));

        app.listen(port, () => {
            console.log('listening on port ' + port);
        })
    }
}