const express = require('express');
const blah  = express.Router();


/* GET home page */
blah.get('/', (req, res, next) => {
  res.render('index');
});







module.exports = blah;




