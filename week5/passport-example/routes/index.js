const express = require('express');
const router  = express.Router();

const ensureLogin = require("connect-ensure-login");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/coolpage' , ensureLogin.ensureLoggedIn('/signup'),(req, res, next)=>{
  res.render('coolpage', {message: req.flash('success')})
})


router.get('/othercoolpage', (req, res, next)=>{
  res.render('otherpage')
})

module.exports = router;
