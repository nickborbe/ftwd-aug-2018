var theCar;
var theObstacles;
var obstacle1;
var obstacle2

window.onload = function() {


  document.getElementById("start-button").onclick = function() {
    startGame();
    drawEverything([theCar, obstacle1, obstacle2])
  };


  var ctx = document.getElementById('theCanv').getContext('2d');

  function startGame() {


     obstacle1 =  {x: 100, y: 100, width: 50, height: 50}
     obstacle2 =   {x: 300, y: 100, width: 50, height: 80}



    obstacle1.draw = function(){
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    obstacle2.draw = function(){
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    theObstacles = [obstacle1, obstacle2]
  
  
  

    theCar = {
      x: 200,
      y: 600,
      width: 50,
      height: 80,
      imageSource: "images/car.png"
      
    }
    

    theCar.draw = function()  {
      console.log(this)

      var theImage = new Image();
      theImage.src = this.imageSource;
      
      theImage.onload = ()=>{
        ctx.drawImage(theImage, this.x, this.y, this.width, this.height)
      }

    }

    theCar.moveUp = function(){

      if(this.checkMove(this.x, this.y - 10)){
        ctx.clearRect(this.x, this.y, this.width, this.height);
        this.y-= 10;
        this.draw();
      }


    }

    theCar.moveDown = function(){

      if(this.checkMove(this.x, this.y + 10)){

          ctx.clearRect(this.x, this.y, this.width, this.height);
          this.y+= 10;
          this.draw();
      }
    }

    theCar.moveRight = function(){

      if(this.checkMove(this.x + 10, this.y)){

          ctx.clearRect(this.x, this.y, this.width, this.height);
          this.x+= 10;
          this.draw();
      }
    }

    theCar.moveLeft = function(){
      if(this.checkMove(this.x - 10, this.y)){

          ctx.clearRect(this.x, this.y, this.width, this.height);
          this.x-= 10;
          this.draw();

      }
    }


    theCar.checkMove = function(futureX, futureY){
      var valid = (futureX > 0 && (futureX + this.width) < 400 && futureY > 0 && (futureY + this.height) < 800)

      theObstacles.forEach((eachObstacle)=>{

       
        if(   (futureX + this.width >= eachObstacle.x && futureX <= eachObstacle.x+eachObstacle.width) &&
        (futureY + this.height >= eachObstacle.y && futureY <= eachObstacle.y+eachObstacle.height)   ){

          valid = false;
        }

      })

      return valid;


    }


  }


  function drawEverything(arrayOfEverything){

    arrayOfEverything.forEach(eachThing => {
        eachThing.draw();
    });


  }



  document.onkeydown = (e) =>{

    console.log(e.key)

    switch(e.key){
      case 'ArrowUp':
      theCar.moveUp();
      break;
      case 'ArrowDown':
      theCar.moveDown();
      break;
      case 'ArrowLeft':
      theCar.moveLeft();
      break;
      case 'ArrowRight':
      theCar.moveRight();
      break;

    }

    


  };


};
