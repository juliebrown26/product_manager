// Import
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require('path');
//Config
require('./server/routes/mongoose');
app.use(express.static(__dirname + "/public/dist/public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//Routes
require('./server/routes/product.routes')(app);
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
})
//Port
app.listen(8000, () => console.log("listening on port 8000"));