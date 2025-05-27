#!/usr/bin/env node
require('dotenv').config();
const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS jerseys (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    team VARCHAR (25),
    sport VARCHAR (25),
    brand VARCHAR (25),
    price DECIMAL (10, 2)
);

INSERT INTO jerseys (team, sport, brand, price)
VALUES
    ('Vancouver Canucks', 'hockey', 'reebok', 225.00),
    ('Chicago Bulls', 'basketball', 'nike', 195.00),
    ('Arsenal FC', 'football', 'adidas', 120.00),
    ('New York Yankees', 'baseball', 'nike', 120.00),
    ('Minnesota Timberwolves', 'basketball', 'nike', 180.00),
    ('Real Madrid', 'football', 'adidas', 170.00);
`;

async function main() {
    console.log('seeding database...');
    const client = new Client({
        connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('db seeded');
}
main();