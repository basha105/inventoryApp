function displayCategory(req, res) {
    const { category } = req.params;
    res.send(`Currently viewing all items in the ${category} category`);
}

function displayItem(req, res) {
    const { category, item } = req.params;
    res.send(`Currently viewing ${item}, member of the ${category} category`);
}

module.exports = {
    displayCategory,
    displayItem
}