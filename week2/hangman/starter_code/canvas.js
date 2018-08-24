class hangmanCanvas{
    constructor(theSecrectWord){
        this.secret = theSecrectWord;
        this.ctx = document.getElementById("canvas").getContext('2d');
    }

    drawLines(){

        var theX = 300;
        var theY = 500;
        var lineWidth = 50;
        var spaceBetweenLines = 25;
        for(let i = 0; i < this.secret.length; i++){
            this.ctx.beginPath();
            this.ctx.moveTo(theX, theY);
            this.ctx.lineTo(theX + lineWidth, theY)
            this.ctx.closePath();
            this.ctx.stroke();
            theX += lineWidth+spaceBetweenLines;
        }
    }


    drawCorrectLetters(lettersToDraw){
        var theX= 318;
        var theY = 490;
        var lineWidth = 50;
        var spaceBetweenLines = 25;

        lettersToDraw.forEach((eachLetter)=>{
            this.ctx.font = '48px serif';
            this.ctx.fillText( eachLetter ,theX, theY);
            theX+= lineWidth+spaceBetweenLines;
        })
    }


    drawIncorrectLetters(lettersToDraw){
        var theX= 900;
        var theY = 100;
        var spaceBetweenLetters = 50;
        lettersToDraw.forEach((eachLetter)=>{
            this.ctx.font = '48px serif';
            this.ctx.fillText( eachLetter ,theX, theY);
            theX+= spaceBetweenLetters;
            if(theX >= 1190){
                theX -= 300;
                theY += 100;
            }
        })
    }

            drawHead(){
                console.log(this)

                this.ctx.fillRect(100,100,100,100);
                console.log('drawing the head');
            }

            drawNeck(){
                this.ctx.fillRect(150, 200, 10, 200)
                console.log('drawing the neck');
            }

            drawLeftArm(){
                console.log('drawing the left arm');
            }


            drawHangman(whichPart){

            let arr = [this.drawHead.bind(this), this.drawNeck.bind(this), this.drawLeftArm.bind(this)]

            arr[whichPart]()
              


            }



    








}