const express = require('express');
const app = express();
const indexRouter = require("./routes/indexRouter");
require('dotenv').config();

app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, ()=> {
    console.log("Listening on port", PORT);
});