const pool = require('./pool');

async function getAllItems() {
    const { rows } = await pool.query("SELECT * FROM jerseys");
    return rows;
}

async function getItemsBySport(sport) {
    const { rows } = await pool.query(`SELECT * FROM jerseys WHERE sport = $1`, [sport]);
    return rows;
}

async function addItem(team, sport, brand, price) {
    await pool.query("INSERT INTO jerseys (team, sport, brand, price) VALUES ($1, $2, $3, $4)", [team, sport, brand, price]);
}

async function getCategories() {
    const { rows } = await pool.query(`SELECT sport FROM sports`);
    return rows;
}


module.exports = {
    getItemsBySport,
    getAllItems,
    addItem,
    getCategories
}