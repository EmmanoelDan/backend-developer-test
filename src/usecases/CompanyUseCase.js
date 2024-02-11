// const Company = require('../domain/Company');

module.exports = class CompanyUseCase {
    constructor(repository) {
        this.repository = repository;
    }

    async findAllCompanies(){
        try {
            const findCompanies = await this.repository.findAll();
            return findCompanies
        } catch (error) {
            console.error('Erro ao buscar empresas:', error);
            throw error;
        }
        
    }
}