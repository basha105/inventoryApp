const db = require('../db/queries');

async function displayAllItems(req, res) {
    const items = await db.getAllItems();
    res.render("category", { sport: "All Items", items: items });
}

async function displaySportItems(req, res) {
    const { category } = req.params;
    console.log(category);
    const items = await db.getItemsBySport(category);
    console.log('items:', items);
    res.render("category", { sport: category, items: items});
}

async function displayItem(req, res) {
    const { id } = req.params;
    const rows = await db.getItemById(id);
    const item = rows[0];
    res.render("item", { item: item });
}

async function updateItemGet(req, res) {
    const { id }  = req.params;
    const rows = await db.getItemById(id);
    const item = rows[0];
    res.render("updateItem", { item: item });
}

async function updateItemPost(req, res) {
    const { id } = req.params;
    const { team, sport, brand, price } = req.body;
    await db.updateItemById(id, team, sport, brand, price);
    res.redirect(`/sports/${sport}/${id}`);
}

async function displayCategories(req, res) {
    const cats = await db.getCategories();
    res.render("categories", { categories: cats });
}

module.exports = {
    displayAllItems,
    displaySportItems,
    displayItem,
    updateItemGet,
    updateItemPost,
    displayCategories
}