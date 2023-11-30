const knex = require('knex');

const db = knex({
    client: 'mysql2',
    connection: {
        host: 'mysql', // docker-compose service
        user: 'user_gym',
        password: '54321',
        database: 'gym'
    }
});

module.exports = db;