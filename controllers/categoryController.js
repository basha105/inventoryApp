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


function displayItem(req, res) {
    const { category, item } = req.params;
    res.send(`Currently viewing ${item}, member of the ${category} category`);
}

async function displayCategories(req, res) {
    const cats = await db.getCategories();
    res.render("categories", { categories: cats });
}



module.exports = {
    displayAllItems,
    displaySportItems,
    displayItem,
    displayCategories
}