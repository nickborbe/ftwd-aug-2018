const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs')

const PunkAPIWrapper = require('punkapi-javascript-wrapper')
const punkAPI = new PunkAPIWrapper()


app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(path.join(__dirname, 'public')));




app.get('/', (req, res, next) => {
    res.render('home');
  });
  
  app.get('/players', (req, res, next) => {

    const players = [
        {
          'name': 'Rusell', 
          'lastName': 'Westbrook', 
          'team': 'OKC', 
          'photo': 'https://thunderousintentions.com/wp-content/uploads/getty-images/2017/12/891998404-oklahoma-city-thunder-v-indiana-pacers.jpg.jpg',
            mvp: true
          },
        {
          'name': 'Kevin', 
          'lastName': 'Durant', 
          'team': 'GSW', 
          'photo': 'https://img.bleacherreport.net/img/images/photos/003/670/482/hi-res-3c2473cd8600df96c4b94c93808562c8_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top',
          mvp: true
        },
        {
          'name': 'Lebron', 
          'lastName': 'James', 
          'team': 'CLE', 
          'photo': 'https://usatftw.files.wordpress.com/2018/01/ap_cavaliers_timberwolves_basketball.jpg?w=1000&h=600&crop=1',
          mvp: true
        },
        {
          'name': 'Emanuel', 
          'lastName': 'Ginóbilli', 
          'team': 'SAS', 
          'photo': 'https://cdn.vox-cdn.com/thumbor/Z9kR0HDJrzOzxOdwGe7Jwyxxvjk=/0x0:2802x4203/1200x800/filters:focal(1329x1158:1777x1606)/cdn.vox-cdn.com/uploads/chorus_image/image/57733525/usa_today_10429631.0.jpg',
          mvp: false
        },
        {
          'name': 'Kyrie', 
          'lastName': 'Irving', 
          'team': 'BOS', 
          'photo': 'https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2017/11/11/kyrie-irving-mvp-case.jpg?itok=PWYqUSGf',
          mvp: false
        },
        {
          'name': 'Kobe', 
          'lastName': 'Bryant', 
          'team': 'LAK', 
          'photo': 'https://clutchpoints.com/wp-content/uploads/2017/10/Kobe-Bryant-e1508564618882.jpg',
          mvp: true
        },
      ]






    res.render('players', {theList: players});
  });
  
  app.get('/teams', (req, res, next) => {
    res.render('teams', {layout: false});
  });


  app.get('/randomBeers', (req,res,next)=>{

    punkAPI.getBeers()
    .then(daBeers => {

        console.log(daBeers[0].food_pairing)

        res.render('beers', {theList:daBeers });

  })
  .catch(error => {
    console.log(error)
  })




  })





app.listen(3000);