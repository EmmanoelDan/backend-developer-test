const {Router} = require('express');
const CompaniesControler = require('../controllers/CompaniesController');
const CompaniesRepository = require('../repositories/CompanyRepository');
const CompanyUseCase = require('../usecases/CompanyUseCase');


const companiesRepository=  new CompaniesRepository();
const companiesUseCase = new CompanyUseCase(companiesRepository);
const companiesController = new CompaniesControler(companiesUseCase);

const routes = Router();

routes.get('/api', (req, res) => {
    res.status(200).json({message: "Hello world!"});
})

routes.get('/companies', async (req, res) => {
    const {data} = await companiesController.index(req)
    
    res.status(200).json(data);
})

module.exports = routes;