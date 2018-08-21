window.onload = function(){

  var calculatePriceButton = document.getElementById('calc');

  calculatePriceButton.onclick = () => {
    var rows = document.getElementsByClassName('row');


    var realTotal = 0;
    
    for(let i = 0; i < rows.length; i++){
      
      
      var quantity = rows[i].querySelector('input').value;

      
      var pricePerUnit = Number(rows[i].querySelector('.product-price').innerHTML.substr(1));
      var tempTotal = quantity * pricePerUnit;
      realTotal += tempTotal
      rows[i].querySelector('.product-calculated-price').innerHTML = '$'+tempTotal.toFixed(2);
      

    }
      document.getElementById('real-actual-total').innerHTML = '$'+realTotal.toFixed(2);

  }


  var deleteButtons = document.getElementsByClassName('btn-delete');


  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }

  function deleteItem(blahEvent){
      blahEvent.currentTarget.parentNode.remove();
  }


  var createButton = document.getElementById('create-new');

  createButton.onclick = () => {
    var theTitle = document.querySelector('.create-title').value;
    var thePrice = document.querySelector('.create-price').value+'.00'
   
    

    console.log(thePrice, theTitle);

    var newRow = document.createElement('div');
    newRow.className = 'row';

    newRow.innerHTML = `
                <span class="title">${theTitle}</span>
                <span class="product-price">$${thePrice}</span>

                <span>
                  <label>QTY</label>
                  <input type="number">
                </span>

                <span class="product-calculated-price">$0.00</span>

                <button class="btn btn-delete">Delete</button>
    `



      document.getElementById('all-the-rows').appendChild(newRow);

      document.querySelector('.create-title').value = '';
      document.querySelector('.create-price').value = '';


        for(var i = 0; i<deleteButtons.length ; i++){
          deleteButtons[i].onclick = deleteItem;
        }


  }















};




