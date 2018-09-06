// app.js
const express = require('express')
const app     = express()
const hbs     = require('hbs') 
const path    = require('path')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res, next)=>{
    res.render('home')
})

app.post('/accountDetails', (req, res, next)=>{

    const theUsername = req.body.theUserNameThing;
    const thePass     = req.body.thePasswordThing;


    res.render('accountDetails', {usr: theUsername, pss: thePass})

})


app.get('/profile/:username', function (req, res) {
  res.render('index', {theUserNameVariable: req.params.username})
})



app.get('/search', function (req, res) {
    res.send('<h1>'+req.query +'</h1>')
  })




app.listen(3000, () => console.log('Example app listening on port 3000!'))