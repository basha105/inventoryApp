const pool = require('./pool');

async function getAllItems() {
    const { rows } = await pool.query("SELECT * FROM jerseys");
    return rows;
}

async function getItemsBySport(sport) {
    const { rows } = await pool.query(`SELECT * FROM jerseys WHERE sport = $1`, [sport]);
    return rows;
}

async function updateItemById(id, team, sport, brand, price) {
    await pool.query(`
        UPDATE jerseys
        SET team = $1, sport = $2, brand = $3, price = $4
        WHERE id = $5`, [team, sport, brand, price, id]);
}

async function addItem(team, sport, brand, price) {
    await pool.query("INSERT INTO jerseys (team, sport, brand, price) VALUES ($1, $2, $3, $4)", [team, sport, brand, price]);
}

async function getItemById(id) {
    const { rows } = await pool.query(`SELECT * FROM jerseys WHERE id = $1`, [id]);
    return rows;
}

async function getCategories() {
    const { rows } = await pool.query(`SELECT sport FROM sports`);
    return rows;
}

module.exports = {
    getItemsBySport,
    getAllItems,
    updateItemById,
    addItem,
    getItemById,
    getCategories
}