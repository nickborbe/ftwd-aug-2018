class Hangman{
  constructor(){
    this.words = ['plant', 'skyscraper', 'dog', 'cat', 'chicken', 'pasta'];
    this.secretWord = this.words[ Math.floor(Math.random() * this.words.length)];
    this.errorsLeft = 10;
    this.correctGuesses = new Array(this.secretWord.length).fill('');
    this.incorrectGuesses = [];
  }

  checkIfItsALetter(theThingIAmChecking){
    if(theThingIAmChecking >= 65 && theThingIAmChecking <= 90){
      return true;
    }
    return false;
  }

  isItADuplicateGuess(theThingIAmChecking){
   return (  this.correctGuesses.includes(theThingIAmChecking) ||  this.incorrectGuesses.includes(theThingIAmChecking)   )
  }

  evaluateGuess(theGuess){
    return this.secretWord.includes(theGuess);
  }

  addCorrectLetter(theLetter){
    // check to see if you won
  this.secretWord.split('').forEach((eachLetter, ind)=>{
    if(eachLetter === theLetter){
      this.correctGuesses[ind] = theLetter;
    }
  });

  this.board.drawCorrectLetters(this.correctGuesses);

  }


  addIncorrectLetter(theLetter){
    this.incorrectGuesses.push(theLetter);
    this.errorsLeft--;
    this.board.drawIncorrectLetters(this.incorrectGuesses);
    this.board.drawHangman(9 - this.errorsLeft)
    // check to see if you lost
  }



 


 
}

document.getElementById('start-game-button').onclick = function () {
  theGame = new Hangman();
  theBoard = new hangmanCanvas(theGame.secretWord);
  theGame.board = theBoard;
  theGame.board.drawLines();


};


document.onkeydown = function (e) {

   if( theGame.checkIfItsALetter(e.keyCode) ){

     if(!theGame.isItADuplicateGuess(e.key)){

          console.log('brand new letter');

         if(theGame.evaluateGuess(e.key)){
              // this means the guess was correct
              theGame.addCorrectLetter(e.key);

         } else{
              // this means incorrect guess
              theGame.addIncorrectLetter(e.key);

         } 

      } else{
        // this means letter is a duplicate
         console.log('repeat letter');
    }


   }
    



 
};
