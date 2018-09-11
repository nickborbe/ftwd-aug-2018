window.onload = ()=>{

//the pokemon api thing
    // document.getElementById('search-btn').onclick = ()=>{

    //     const theInput = document.getElementById('the-poke-number')

    //     axios.get('https://pokeapi.co/api/v2/pokemon/'+theInput.value)
    //     .then((theResponse)=>{
    //         document.getElementById('results').innerHTML = 
    //         `<div>You Searched for Pokemon No. ${theInput.value}</div>
    //         <div> That is ${theResponse.data.name}</div>`
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })  
    // }




    document.getElementById('search-btn').onclick = getAllCharacters;




        function getAllCharacters(){
        const theResultDiv = document.getElementById('results')

        axios.get('https://ih-crud-api.herokuapp.com/characters')
        .then((response)=>{
            const theArrayOfStuff = response.data;

            theResultDiv.innerHTML = "";

            response.data.forEach((eachThing)=>{
                theResultDiv.innerHTML += `
                <div class="char-component">
                <h2> Name:  ${eachThing.name} </h2>
                <h5> Occupation: ${eachThing.occupation} </h5>
                <p> Weapon: ${eachThing.weapon} </p>
                </div>
                `
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }



    document.getElementById('create').onclick = () => {

        axios.post('https://ih-crud-api.herokuapp.com/characters',
         {name: 'SpongeBob SquarePants', occupation: 'Gourmet Patty Prepapration Dept. Supervisor', weapon: 'Spatula', debt: false})
         .then((response)=>{
            getAllCharacters();
         })
         .catch((err)=>{
             console.log(err);
         })


       
    }










}