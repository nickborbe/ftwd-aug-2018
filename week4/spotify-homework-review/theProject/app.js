const express     = require('express');
const app         = express();
const hbs         = require('hbs');
const path        = require('path');
const bodyParser  = require('body-parser');
var SpotifyWebApi = require('spotify-web-api-node');



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));



// Remember to paste here your credentials
var clientId = '5d4b9d339c424a129f84517194a6fbfa',
    clientSecret = '26b114ed75e346889ea47ae7ad38328a';

var spotifyApi = new SpotifyWebApi({
  clientId : clientId,
  clientSecret : clientSecret
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function(err) {
    console.log('Something went wrong when retrieving an access token', err);
});


















    app.get('/', (req, res, next)=>{
        res.render('index')
    })




    app.get('/search', (req, res, next)=>{

            spotifyApi.searchArtists(req.query.theSearchThingy)
            .then(theThingIGetBack => {

                res.render('searchResults', {  theArtist: theThingIGetBack.body.artists.items[0] })

            })
            .catch(theErrorIGetBack => {

                res.render('error')
            })


    })


    app.get('/showMeTheAlbums/:whateverTheArtistID/:theName', (req, res, next)=>{

        spotifyApi.getArtistAlbums(req.params.whateverTheArtistID)
        .then((theThingIGetBack)=>{


            console.log(theThingIGetBack.body.items[0].images)
            
            res.render('albums', {  listOfAlbums:  theThingIGetBack.body.items, theName: req.params.theName  })

        })
        .catch((err)=>{
            res.render('error')
        })


     


    })








app.listen(3000, () => console.log('Example app listening on port 3000!'))
