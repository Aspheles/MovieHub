var express = require("express");
var ejs = require('ejs');
var path = require('path');
var fs = require('fs');
require('dotenv').config();
var app = express();
var movieRouter = require('./public/js/movies')

// Static files
app.use(express.static('public'))
app.use('/style', express.static(__dirname + '/public/style'))
app.use('/js', express.static(__dirname + '/public/js'))
app.use('/img', express.static(__dirname + '/public/img'))

// Set Views
app.set('views', './public/views')
app.set('view engine','ejs'); 
app.engine('ejs', require('ejs').__express);
app.use('/movies', movieRouter);

app.get('', (req,res) => {
    res.render('index', {data: result})
});

app.get('/about', (req,res) => {
    res.render('about', {username: 'Mario'})
});

app.listen(process.env.PORT);
console.log('Express server started');
console.log(__dirname + '/public');