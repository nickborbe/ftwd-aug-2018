const express = require('express');
const router  = express.Router();
const Book    = require('../models/book')


/* GET home page */
router.get('/books', (req, res, next) => {
    Book.find()
    .then((theStuffWeGetBack)=>{
        
        res.render('listOfBooks', {listOfBooks: theStuffWeGetBack})
    })
    .catch((err)=>{
        next(err);
    })
});




router.get('/books/new', (req, res, next)=>{
    res.render('newBook');
})


router.post('/books/create', (req, res, next)=>{

   const theTitle = req.body.bookTitle;
   const theDescription = req.body.description;
    const theAuthor = req.body.theAuthor;
    const theRating = req.body.rating;

    Book.create({
        name: theTitle,
        description: theDescription,
        author: theAuthor,
        rating: theRating
    })
    .then((response)=>{
        res.redirect('/books')
    })
    .catch((err)=>{
       next(err);
    })
})



router.get('/books/edit/:bookid', (req, res, next)=>{
    Book.findById(req.params.bookid)
    .then((theBook)=>{
        res.render('editBook', {book: theBook});
    })
    .catch((err)=>{
        next(err);
    })
})

router.post('/books/update/:id', (req, res, next)=>{
   const theTitle = req.body.bookTitle;
   const theDescription = req.body.description;
   const theAuthor = req.body.theAuthor;
   const theRating = req.body.rating;



    Book.findByIdAndUpdate(req.params.id, {
        name: theTitle,
        description: theDescription,
        author: theAuthor,
        rating: theRating
    })
    .then((response)=>{
        res.redirect('/books/'+req.params.id)
    })
    .catch((err)=>{
       next(err);
    })

    console.log('body:', req.body)

})


router.post('/books/delete/:id', (req, res, next)=>{
    Book.findByIdAndRemove(req.params.id)
    .then((response)=>{
        res.redirect('/books')
    })
    .catch((err)=>{
       next(err);
    })

})





router.get('/books/:theBookID', (req, res, next)=>{
    Book.findById(req.params.theBookID)
    .then((theActualBook)=>{

        res.render('details', {theBook: theActualBook})

    })
    .catch((err)=>{

        next(err)

    })
})









module.exports = router;







