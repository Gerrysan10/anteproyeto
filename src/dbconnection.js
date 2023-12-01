const fs = require('fs');
const knex = require('knex');

const connectToMysql = async function(){
    const dbPassword = await fs.promises.readFile('/run/secrets/db_password');
    const db = knex({
        client: 'mysql2',
        connection: {
            host: 'mysql', // docker-compose service
            user: 'user_gym',
            password: dbPassword,
            database: 'gym'
        }
    });
    return db;
}


module.exports = {connectToMysql};