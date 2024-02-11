// const pgp = require('pg-promise');
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'root',
    port: 5432,
});

async function connectDB() {
  try {
    await pool.connect();
    const result = await pool.query('SELECT id, name, created_at, updated_at FROM companies')
    // console.log(result.rows);
    console.log('Conectado ao SQL Server');
  } catch (error) {
    console.error('Erro ao conectar ao SQL Server:', error);
}
}

module.exports = {pool, connectDB}