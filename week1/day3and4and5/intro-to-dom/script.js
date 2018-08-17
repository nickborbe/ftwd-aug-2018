// https://3c1703fe8d.site.internapcdn.net/newman/csz/news/800/2016/swedenssupre.jpg



let button = document.getElementById('the-button');

    button.onclick = (blah) => {
        let rectangle = document.querySelector('#rec');
        let btn = blah.currentTarget;
        
        if(rectangle.className.includes('blue') && rectangle.className.includes('rect')){ 
            rectangle.className = 'green large';
            btn.innerHTML = 'make box blue and small';
        } else  {
            rectangle.className = 'blue rect';
            btn.innerHTML = 'make box large and green';
        }
    }


    let createBtn = document.getElementById('create-an-input');

    createBtn.onclick = ()=>{
        var newThing = document.createElement('p');
        newThing.innerHTML = 'Wow, look, its a brand new p tag that was never there before';
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(newThing);

    }

    
    document.getElementById('quote-btn').onclick = () => {
        let theInput = document.getElementById('the-inp');
        let theQuote = theInput.value

        let newQuoteLI = document.createElement('li');
        newQuoteLI.innerHTML = theQuote;
        document.querySelector('.quotes').appendChild(newQuoteLI);
        
        theInput.value = '';
        
    }


    let theInput = document.getElementById('the-inp');
    theInput.onchange = ()=>{
        console.log('wow')
    }
    
    