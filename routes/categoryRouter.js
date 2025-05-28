const Router = require('express');
const categoryRouter = Router();
const categoryController = require("../controllers/categoryController");

categoryRouter.get("/:category/:item", categoryController.displayItem);
categoryRouter.get("/:category", categoryController.displaySportItems);
categoryRouter.get("/", categoryController.displayCategories);

module.exports = categoryRouter;