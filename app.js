require('dotenv').config();
const express = require('express');
const app = express();
const indexRouter = require("./routes/indexRouter");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true}));

app.use("/", indexRouter);
console.log("password:", process.env.DB_PASSWORD);
console.log("db name:", process.env.DB_NAME);


const PORT = 3000;
app.listen(PORT, ()=> {
    console.log("Listening on port", PORT);
});