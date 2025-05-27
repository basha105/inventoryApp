const pool = require('./pool');

async function getAllItems() {
    const { rows } = await pool.query("SELECT * FROM jerseys");
    return rows;
}

async function getItemsBySport(sport) {
    const { rows } = await pool.query(`SELECT * FROM jerseys WHERE sport = $1`, [sport]);
    return rows;
}

module.exports = {
    getItemsBySport,
    getAllItems
}