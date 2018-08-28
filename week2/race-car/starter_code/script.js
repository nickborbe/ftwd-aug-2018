let theGame;
window.onload = function() {





class Game{
  constructor(){
    this.car = new RaceCar();
    this.obstacles = [];
    // this.car.draw();
    // this.obstacles.forEach((obst)=>obst.draw());
  }


  collisionCheck(){
    this.obstacles.forEach((eachObstacle)=>{
            if((this.car.x + this.car.width >= eachObstacle.x && this.car.x <= eachObstacle.x+eachObstacle.width) &&
            (this.car.y + this.car.height >= eachObstacle.y && this.car.y <= eachObstacle.y+eachObstacle.height)   ){
              console.log("AHHHHHH collision!=-=-=--=-=-=-=-=-=-=-=-")
            }
    })
  }

  drawEverything(){
    this.car.draw();
    this.obstacles.forEach((oneObst)=>{
      oneObst.draw();
    })
  }



  spawnNewObstacle(){
    const theX = 0;
    const theY = Math.floor(Math.random()*600);
    const theWidth = Math.floor(Math.random()*150);
    const theHeight = Math.floor(Math.random()*150);
    this.obstacles.unshift( new Obstacle(theX, theY, theWidth, theHeight)   ) 
    this.obstacles[0].runAccrossTheScreen();
  }

}


class RaceCar{

  constructor(){
        this.x = 200;
        this.y = 600;
        this.width = 50;
        this.height = 80;
        this.imageSource = "images/car.png";
  }
  

  draw()  {
    
    var theImage = new Image();
    theImage.src = this.imageSource;
    
    // theImage.onload = ()=>{
      ctx.drawImage(theImage, this.x, this.y, this.width, this.height)
    // }

  }

  moveUp(){
      this.y-= 10;
  }

  moveDown(){
        this.y+= 10;

  }

  moveRight(){
        this.x+= 10;
  }
 

  moveLeft(){
    console.log("moving left")
        this.x-= 10;
  }


  // checkMove(futureX, futureY){
  //   var valid = (futureX > 0 && (futureX + this.width) < 400 && futureY > 0 && (futureY + this.height) < 800)

  //   theObstacles.forEach((eachObstacle)=>{

     
  //     if(   (futureX + this.width >= eachObstacle.x && futureX <= eachObstacle.x+eachObstacle.width) &&
  //     (futureY + this.height >= eachObstacle.y && futureY <= eachObstacle.y+eachObstacle.height)   ){

  //       valid = false;
  //     }

  //   })

  //   return valid;
  // }


}


  class Obstacle{
    constructor(theX, theY, theWidth, theHeight){
      this.x = theX;
      this.y = theY;
      this.width = theWidth;
      this.height = theHeight;
    }


      draw(){
      ctx.fillRect(this.x, this.y, this.width, this.height)
      }



      runAccrossTheScreen(){
        setInterval(()=>{
          this.x+=5;
        },50)
      }

  }







  var ctx = document.getElementById('theCanv').getContext('2d');



  document.getElementById("start-button").onclick = function() {
    startGame();
  
    animate();

  };



  function startGame() {
    theGame = new Game();


  }



  let frames = 0;

  function animate(){

    // setInterval(()=>{
      ctx.clearRect(0,0,400,800);
      theGame.drawEverything();
      if(frames % 100 === 0)theGame.spawnNewObstacle();
      theGame.collisionCheck();
      frames++;
    // },50)

    window.requestAnimationFrame(animate);
  }




  document.onkeydown = (e) =>{
    

    switch(e.key){
      case 'ArrowUp':
      e.preventDefault();
      theGame.car.moveUp();
      break;
      case 'ArrowDown':
      e.preventDefault();
      theGame.car.moveDown();
      break;
      case 'ArrowLeft':
      e.preventDefault();
      theGame.car.moveLeft();
      break;
      case 'ArrowRight':
      e.preventDefault();
      theGame.car.moveRight();
      break;

    }
  };


};
