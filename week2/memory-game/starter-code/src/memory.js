class MemoryGame{
  constructor(cards){
    this.cards = cards;
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.currentPair = [];
  }


  checkIfPair(oneThing, otherThing){
    return oneThing === otherThing;
  }


  updateScore(){
    $('#pairs_clicked').html(this.pairsClicked);
    $('#pairs_guessed').html(this.pairsGuessed);
  }


  checkResult(){
    setTimeout(()=>{

      if(this.pairsGuessed === 12){
        alert("yay, you did it, you must have  really good memory")
        $('#memory_board').empty();
        $('#memory_board').append(`
          <button id="new-game">Start A New Game</button>
        `);

        $('#new-game').click(function(){
          window.location.reload();
        })

      }
    },100);
  }



  shuffleCard(array){
 
      var m = array.length, t, i;
    
      // While there remain elements to shuffle…
      while (m) {
    
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
    
        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
    
      return array;
    }
  
    
}





