const express = require("express");
const ejs = require("ejs");
const app = express();
const { response } = require("express");

app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    // res.send("hello world")
    res.render("index");
});

app.listen(8000, function (req, res) {
    console.log("8000 port running........ ");

});