// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();


app.use(express.static('public'));



// our first Route:
app.get('/', (request, response, next) => {
    //talk to mongo
    // grab the user info from mongo
    // find all the facebook posts made by that users friends
    // const blah = all those facebookPosts
            //    |
            //    v

  response.send('<h1>Welcome Ironhacker. :)</h1>');
});

app.get('/blah', (request, response, next) => {
    response.send('this is the blah page');
  });

  app.get('/wow', (request, response, next) => {
    response.sendFile(__dirname + '/views/theWowPage.html')
  });



// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});