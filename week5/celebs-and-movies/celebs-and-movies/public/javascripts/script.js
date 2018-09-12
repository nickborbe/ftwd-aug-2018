document.addEventListener('DOMContentLoaded', () => {




  document.getElementById('fetch-movies').onclick = fetchAllMovies;
  
  
  function fetchAllMovies(){
    axios.get('http://localhost:3000/api/movies')
    .then((listOfThings)=>{



      const resultDiv = document.getElementById('results')

      resultDiv.innerHTML = '';

      listOfThings.data.forEach((eachThing)=>{


        resultDiv.innerHTML += `
        <h2> ${eachThing.title} <h2>
        `
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  }


  document.getElementById('add-new-movie').onclick = () =>{

    const title = document.getElementById('title').value;
    const genre = document.getElementById('genre').value;
    const image = document.getElementById('image').value;

    axios.post('/api/movies/create', {title: title, genre: genre, image: image})
    .then((response)=>{
      console.log('=-=-=-=-=--=-=', response)
      fetchAllMovies();
    })
    .catch((err)=>{
      console.log(err);
    })


    
  }



  














}, false);
