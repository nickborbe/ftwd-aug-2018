const express = require('express');
const router  = express.Router();

const ensureLogin = require("connect-ensure-login");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/coolpage' , ensureLogin.ensureLoggedIn('/signup'),(req, res, next)=>{
  console.log('=-=-=-=-=--=-', req.flash())
  res.render('coolpage')
})


router.get('/othercoolpage', (req, res, next)=>{
  res.render('otherpage')
})

module.exports = router;
