const express = require('express');
const Movie = require('../models/movie.js')
const router = express.Router();
const uploadCloud = require('../config/cloudinary');


/* GET home page */
router.get('/movies', (req, res, next) => {
  Movie.find()
  .then((movies) => {
    res.render('index', { movies: movies });
  })
  .catch((error) => {
    console.log(error)
  })
});

router.get('/movies/add', (req, res, next) => {
  res.render('movie-add')
});


router.post('/movie/add', uploadCloud.single('photo'), (req, res, next) => {
    console.log('=-=-=-=-=-=-=-=-=-=-=-',req.file)
    const { title, description } = req.body;
    const imgPath = req.file.url;
    const imgName = req.file.originalname;
    Movie.create({title: title, description: description, imgName: imgName, imgPath: imgPath})
    .then(movie => {
      res.redirect('/')
    })
    .catch(error => {
      console.log(error)
    })
  });

module.exports = router;