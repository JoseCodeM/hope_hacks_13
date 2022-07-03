const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser')
require("dotenv").config();
const app = express();
app.use(express.json());
const port = 5000;
const path = require('path');
const req = require('express/lib/request');
const uri = process.env.MONGODB_CONNECTION_STRING;


//Connecting MongoDB to server.
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection
connection.once("open", () => {
    console.log("MongoDB connection established")
})

app.use(bodyParser.urlencoded({ extended: true }))

// Static Files
app.use(express.static('public'));
// Specific folder example
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');


// Navigation
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/map', (req, res) => {
    res.render('map')
})

app.get('/contact', (req, res) => {
    res.render('contact',)
})

app.get('/getResults', (req, res) => {
    res.render(req.body)
})

app.get('/quiz', (req, res) => {
    res.render('quiz')
})

//getting information from the front end
app.get('/quiz', (req, res) => {
    req.render('quiz')
})
app.post('/getResults', (req, res) => {
    let post = req.body;
    const hopehacks13 = Number(post.question1) + Number(post.question2) + Number(post.question3) + Number(post.question4);

    console.log(hopehacks13);
})



// Example for other folders
app.listen(5000, () => console.info(`App listening on port ${port}`))
