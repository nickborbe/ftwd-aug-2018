// $(document).ready(()=>{


var allTheItemsExceptTheOnesWithSuperClass = $(".random-list li:not('.super-class') ")


var allTheLisThatHaveGorillaInThem = $(".random-list li:contains('illa')")


    var myButton = $('#theButton')

   
    
    myButton.click(function(e){

        var input = $('#the-input');

        var whatToAppend = input.val();

        var invisDiv = $('.invisible-div');


        invisDiv.html(`

        <h2> This is a new Item </h2>
        
        <p> <b> ${whatToAppend} </b> </p>
        
        `)

        wolfPic.toggle()

        
    });



    var otherWolfUrl = 'https://static1.squarespace.com/static/58051e44e6f2e1b132c6ee34/58051ee2f5e2311a8d650956/5877b729ff7c50ba8358b046/1484240766564/wolf.jpg?format=2500w'


    var wolfPic = $('#wolf-picture')


    console.log(wolfPic.attr('src'))
   console.log(wolfPic.prop('src'))

















// })
