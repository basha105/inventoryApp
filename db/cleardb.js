require('dotenv').config();
const { Client } = require('pg');

const SQL = `DROP TABLE jerseys;
DROP TABLE sports`;

async function main() {
    console.log('clearing database...');
    const client = new Client({
        connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('db cleared.');
}
main();