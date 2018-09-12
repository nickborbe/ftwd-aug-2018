const express = require('express');
const router  = express.Router();
const passport = require('passport');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});




router.get('/wow', (req, res, next)=>{

  res.send('this is the wow page')
})






router.get("/auth/google", passport.authenticate("google", {
  scope: ["https://www.googleapis.com/auth/plus.login",
          "https://www.googleapis.com/auth/plus.profile.emails.read"]
}));

router.get("/auth/google/callback", passport.authenticate("google", {
  failureRedirect: "/",
  successRedirect: "/wow"
}));









module.exports = router;
