import {expect, test} from "vitest"
import {Company} from "../../src/domain/entities/company.entity"


test('create a new company', () => {
    const company = new Company();
    company.name = 'Google Inc.';

    expect(company).toBeInstanceOf(Company);
    expect(company.name).toBe('Google Inc.');
})
