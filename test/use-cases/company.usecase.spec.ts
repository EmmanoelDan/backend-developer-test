import { describe, it, expect } from "vitest";
import {InMemoryCompanyRepository} from "../../src/infraestrutura/in-memory/in-memory.company.repository"

describe('get companies', () => {
    it('should return a list of companies', async () => {
        const companyRepository = new InMemoryCompanyRepository();

        await companyRepository.populateInMemoryCompany();

        const response = await companyRepository.find();

        expect(response).toBeInstanceOf(Array)

    })

})

describe('get company by id', () => {
    it('Should be able to search for only one company per ID', async() => {
        const companyRepository = new InMemoryCompanyRepository();
        await companyRepository.populateInMemoryCompany();
        // const data = await companyRepository.items

        const response = await companyRepository.findById('1');
        // console.log(response)
        expect(response?.id).toBe('1');
    })

    it('The ID must be valid', async () => {
        const companyRepository = new InMemoryCompanyRepository();
        await companyRepository.populateInMemoryCompany();

        const existCompanyId = '1';
        const existCompoany = await companyRepository.findById(existCompanyId);

        expect(existCompoany).toBeDefined();

        // verify that the company exists: example company invalida
        const notExistCompanyId = '9999'
        const notExistCompany = await companyRepository.findById(notExistCompanyId);
        expect(notExistCompany).toBeNull();
    })

    
})

describe('company name unique', () => {
    it('The company must have a unique name', async () => {
        const companyRepository = new InMemoryCompanyRepository();

        await companyRepository.populateInMemoryCompany();

        const data = await companyRepository.items

        const newCompanyName = 'Company D';
        let errorOccured = false;

        // console.log(data)
        data.map(async company => {
            if (newCompanyName === company.name) {
                errorOccured = false;
                expect(errorOccured).toBe(false);
            } else {
                errorOccured = true;
            }
        })

        expect(errorOccured).toBe(true)

    })
})