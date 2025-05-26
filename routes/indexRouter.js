const Router = require('express');
const indexRouter = Router();
const categoryRouter = require('./categoryRouter');

indexRouter.use("/categories", categoryRouter);
indexRouter.get("/", (req, res) => res.send("Youre at the home page"));


module.exports = indexRouter;