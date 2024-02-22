import {expect, test} from "vitest"
import {Company} from "../../src/domain/entities/Company"
import { randomUUID } from "crypto";


test('create a new company', () => {
    const company: Company = {
        id: randomUUID(),
        name: 'Google Inc.',
        created_at: new Date(),
        updated_at: new Date()
    };

    expect(company);
    expect(company.name).toBe('Google Inc.');
})
