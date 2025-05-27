require('dotenv').config();
const express = require('express');
const app = express();
const indexRouter = require("./routes/indexRouter");
const path = require('path');

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true}));

app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, ()=> {
    console.log("Listening on port", PORT);
});