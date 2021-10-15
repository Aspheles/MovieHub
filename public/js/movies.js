var express = require('express');
var router = express.Router();
var db=require('./database');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/movie-list', function(req, res, next) {
    var sql='SELECT * FROM movies';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('movie-list', { title: 'Movie List', userData: data});
  });
});
module.exports = router;