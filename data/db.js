const pg = require('pg-promise')();
const database = pg(
    {
    user: 'postgres',
    password: '12345678',
    host: 'localhost',
    port: '5432',
    database: 'cazastore'
    }
);

module.exports = database;