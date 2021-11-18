const express = require("express");
const fs = require("fs");
const session = require("express-session")

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render("landingPage");
})

app.route('/login').get(function (req, res) {
    res.render("login", { error: "" });
})
    .post(function (req, res) {
        const { username, password } = req.body;
    });

app.route('/signup').get(function (req, res) {
    res.render("signup");
})
    .post(function (req, res) {

    });