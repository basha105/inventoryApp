const Router = require('express');
const categoryRouter = Router();
const categoryController = require("../controllers/categoryController");

categoryRouter.post("/:category/:id/update", categoryController.updateItemPost);
categoryRouter.get("/:category/:id/update", categoryController.updateItemGet);
categoryRouter.get("/:category/:id", categoryController.displayItem);
categoryRouter.get("/:category", categoryController.displaySportItems);
categoryRouter.get("/", categoryController.displayCategories);

module.exports = categoryRouter;