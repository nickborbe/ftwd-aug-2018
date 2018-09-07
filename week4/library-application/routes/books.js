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

    })
});


router.get('/books/:theBookID', (req, res, next)=>{

    Book.findById(req.params.theBookID)
    .then((theActualBook)=>{

        res.render('details', {theBook: theActualBook})

    })
    .catch((err)=>{

    })
    



})







module.exports = router;







