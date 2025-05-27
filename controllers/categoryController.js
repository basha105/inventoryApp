const db = require('../db/queries');

async function displayCategory(req, res) {
    const { category } = req.params;
    const items = await db.getItems();
    console.log('items:', items);
    res.render("category", { category: category, items: items});
}

function displayItem(req, res) {
    const { category, item } = req.params;
    res.send(`Currently viewing ${item}, member of the ${category} category`);
}

module.exports = {
    displayCategory,
    displayItem
}