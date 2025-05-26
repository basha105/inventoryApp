const Router = require('express');
const categoryRouter = Router();
const categoryController = require("../controllers/categoryController");

categoryRouter.get("/:category/:item", categoryController.displayItem);
categoryRouter.get("/:category", categoryController.displayCategory);
categoryRouter.get("/", (req, res) => res.send("Currently viewing all categories"));

module.exports = categoryRouter;