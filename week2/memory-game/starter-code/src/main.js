var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

$(document).ready(function(){
  var memoryGame = new MemoryGame(cards);
  // memoryGame.cards = memoryGame.shuffleCard(memoryGame.cards);

  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);


  



  // Bind the click event of each element to a function
  $('.back').click(function () {
    memoryGame.currentPair.push($(this))
    console.log(memoryGame.currentPair)

    $(this).toggle();
    $(this).siblings('.front').toggle();
    
    
    if(memoryGame.currentPair.length === 2){
      memoryGame.pairsClicked++;

      $('.back').addClass('blocked');

      if(  memoryGame.checkIfPair(memoryGame.currentPair[0].attr('name'),  memoryGame.currentPair[1].attr('name')  )  ){
        memoryGame.pairsGuessed++;
         memoryGame.currentPair = []; 
         $('.back').removeClass('blocked');


      
      } else {
        
        setTimeout(()=>{
          memoryGame.currentPair[0].toggle();
          memoryGame.currentPair[0].siblings('.front').toggle();
          memoryGame.currentPair[1].toggle();
          memoryGame.currentPair[1].siblings('.front').toggle();
          memoryGame.currentPair = []; 
          $('.back').removeClass('blocked');
        },1000)
        
        
      }
        
          
          


      memoryGame.updateScore();


      
      memoryGame.checkResult();

    } // ends if length of array === 2
   



  }); // end click function 










});// end document ready


