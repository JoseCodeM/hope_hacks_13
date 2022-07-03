const express = require('express')
const app = express()
const port = 5000
const path = require('path');
// // Static Files
// app.use(express.static('public'));
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))

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

app.get('/quiz', (req, res) => {
    res.render('quiz')
})






// Example for other folders
app.listen(5000, () => console.info(`App listening on port ${port}`))
