const pool = require("../database/database");
const Company = require("../domain/Company");

module.exports = class CompaniesRepository {
    constructor() {
        this.pool = pool
    }

    async findAll() {
        const {rows} = await this.pool.pool.query('SELECT * FROM companies');

        const values = rows.map(row => {
            return row
        })
        
        return values
    }
}