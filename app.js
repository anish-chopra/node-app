const express = require('express');
const app = express();

const data = require('./data.json');

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

app.get("/", (req, res) => {
    res.render('index')
});

app.get("/about", (req, res) => {
    res.render('about')
});

app.listen(3000, () => {
    console.log("The application is running on localhost: 3000!")
});