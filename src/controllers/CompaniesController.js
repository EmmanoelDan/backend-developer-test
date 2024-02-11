
module.exports = class CompaniesControler {
    constructor(usecase) {
        this.usecase = usecase;
    }
    async index(request) {
        const companies = await this.usecase.findAllCompanies();
        return {data: {companies}}
    }
}