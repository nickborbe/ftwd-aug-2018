const express = require('express');
const router  = express.Router();
const nodemailer = require('nodemailer');


// https://www.google.com/settings/security/lesssecureapps
// use this link to enable nodemailer to access your gmail account


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});




router.post('/send-email', (req, res, next) => {
    let email = req.body.email;
    let subject = req.body.subject;
    let message = req.body.message;

// include these 2 code blocks in your sign up route
//--------------------------------------------------
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'adjudicatearbitrate@gmail.com',
      pass: 'adjudicate' 
    }
  });

  transporter.sendMail({
    from: '"My Awesome Project 👻" <myawesome@project.com>',
    to: email, 
    subject: subject, 
    text: message,
    html: `<b>${message}</b>`
  })
  //--------------------------------------------------
  .then(info => res.render('message', {email, subject, message, info}))
  .catch(error => console.log(error));

});


module.exports = router;
