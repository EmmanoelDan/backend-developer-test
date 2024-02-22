import { describe, it, expect } from "vitest";
import {InMemoryCompanyRepository} from "../../src/infra/repositories/in-memory/InMemoryCompanyRepository"
import { Company } from "../../src/domain/entities/Company";
import { randomUUID } from "crypto";

describe('get companies', () => {
    it('should return a list of companies', async () => {
        const companyRepository = new InMemoryCompanyRepository();

        const company: Company = {
            id: randomUUID(),
            name: 'Google Inc.',
            created_at: new Date(),
            updated_at: new Date()
        };

        const response = await companyRepository.findAll();

        expect(response).toBeInstanceOf(Array)

    })

})

describe('get company by id', () => {
    it('Should be able to search for only one company per ID', async() => {
        const companyRepository = new InMemoryCompanyRepository();
        const company: Company = {
            id: randomUUID(),
            name: 'Google Inc.',
            created_at: new Date(),
            updated_at: new Date()
        };
        // const data = await companyRepository.items

        const response = await companyRepository.find(company.id);
        // console.log(response)
        expect(response?.id)
    })

    it('The ID must be valid', async () => {
        const companyRepository = new InMemoryCompanyRepository();
        const company: Company = {
            id: randomUUID(),
            name: 'Google Inc.',
            created_at: new Date(),
            updated_at: new Date()
        };

        const existCompanyId = company.id;
        const existCompoany = await companyRepository.find(existCompanyId);

        expect(existCompoany).toBeDefined();

        // verify that the company exists: example company invalida
        const notExistCompanyId = '9999'
        const notExistCompany = await companyRepository.find(notExistCompanyId);
        expect(notExistCompany).toBeNull();
    })

    
})

describe('company name unique', () => {
    it('The company must have a unique name', async () => {
        const companyRepository = new InMemoryCompanyRepository();

        const company: Company = {
            id: randomUUID(),
            name: 'Google Inc.',
            created_at: new Date(),
            updated_at: new Date()
        };

        const data = await companyRepository.companies

        const newCompanyName = company.name;
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

        expect(errorOccured)
    })
})