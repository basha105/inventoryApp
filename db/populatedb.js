require('dotenv').config();
const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS cleats (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    brand VARCHAR ( 25 ),
    model VARCHAR ( 25 ),
    price DECIMAL (10, 2),
    year INT
);

INSERT INTO cleats (brand, model, price, year)
VALUES
    ('Adidas', 'Predator', 230.00, 2019),
    ('Nike', 'Mercurial', 310.00, 2017),
    ('Puma', 'Future', 120.00, 2023),
    ('Nike', 'Hypervenom', 190.00, 2013),
    ('Mizuno', 'Morelia III', 150.00, 2022)
`;

async function main() {
    console.log('seeding database...');
    const client = new Client({
        connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    });
    await client.connect;
    await client.query(SQL);
    await client.end();
    console.log('db seeded');
}
main();