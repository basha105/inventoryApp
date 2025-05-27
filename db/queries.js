const pool = require('./pool');

async function getItems() {
    const { rows } = await pool.query(`SELECT * FROM cleats`);
    return rows;
}

module.exports = {
    getItems
}