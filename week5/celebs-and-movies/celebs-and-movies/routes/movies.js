const express      = require('express');
const router       = express.Router();
const Celebrity    = require('../models/Celebrity');
const Movie        = require('../models/Movie');




/* GET home page */
router.get('/movies', (req, res, next) => {
    Movie.find()
    .then((listOfMovies)=>{
        
        res.render('movieViews/index', { theList: listOfMovies });
    })
    .catch((err)=>{
        next(err);
    })
});




router.get('/movies/new', (req, res, next)=>{
    res.render('movieViews/create');
});





router.post('/movies/create', (req, res, next)=>{

    Movie.create({
        title: req.body.title,
        genre: req.body.genre,
        image: req.body.image
    })
    .then((response)=>{
        res.redirect('/movies')
    })
    .catch((err)=>{
        next(err);
    })

});


router.post('/movies/delete/:id', (req, res, next)=>{

    Movie.findByIdAndRemove(req.params.id)
    .then((response)=>{
        res.redirect('/movies')
    })
    .catch((err)=>{
        next(err)
    })

})


router.get('/movies/edit/:movieID', (req, res, next)=>{
    Movie.findById(req.params.movieID)
    .then((theMovie)=>{

        Celebrity.find()
        .then((listOfCelebs)=>{            
            res.render('MovieViews/edit', {  theMovie : theMovie, theCelebs: listOfCelebs  });

        })
        .catch((err)=>{
            next(err)
        })



    })
    .catch((err)=>{
        next(err);
    })

})


router.post('/movies/update/:movieID', (req, res, next)=>{

    Movie.findByIdAndUpdate(req.params.movieID, {
        title: req.body.title,
        genre: req.body.genre,
        image: req.body.image,
        $push: { cast: req.body.theCelebrity }
    })
    .then((response)=>{

        Celebrity.findByIdAndUpdate(req.body.theCelebrity,
            {$push: { movies: req.params.movieID }
        })
            .then((theResponse)=>{
                res.redirect('/movies/'+req.params.movieID)
            })
            .catch((err)=>{
                next(err)
            })
    })
    .catch((err)=>{
        next(err)
    })


})







router.get('/movies/:theid', (req, res, next)=>{
    Movie.findById(req.params.theid).populate('cast')
    .then((theMovie)=>{
        res.render('movieViews/show', {movie: theMovie})
    })
    .catch((err)=>{
        next(err);
    });
});









module.exports = router;