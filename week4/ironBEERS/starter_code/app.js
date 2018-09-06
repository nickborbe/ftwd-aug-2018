
const express = require('express');
const hbs     = require('hbs');
const app     = express();
const path    = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res, next) => {
  res.render('index');
});


app.get('/beers', (req, res, next)=>{

 

  punkAPI.getBeers()
  .then(theArrayOfBeers => {
    res.render('beerpage', {theList: theArrayOfBeers})
  })
  .catch(theThingWeGetBackIfThePromiseIsRejected => {
    console.log(theThingWeGetBackIfThePromiseIsRejected)
  })

})


app.get('/rando', (req, res, next)=>{
  punkAPI.getRandom()
  .then(beers => {
    
    res.render('rando', {theBeer: beers[0]})
  })
  .catch(error => {
    console.log(error)
  })


})


app.listen(3000);