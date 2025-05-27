const Router = require('express');
const indexRouter = Router();
const categoryRouter = require('./categoryRouter');

indexRouter.use("/sports", categoryRouter);
indexRouter.get("/", (req, res) => res.render("home"));


module.exports = indexRouter;