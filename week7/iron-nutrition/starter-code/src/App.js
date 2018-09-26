import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json'
import FoodBox from './FoodBox';
import AddFood from './AddFood';
import Search from './Search';
import TodaysFoods from './TodaysFoods';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      allFoods: foods,
      foodList: foods,
      formShowing: false,
      todaysFoods: []
    }
  }

  addFoodToList = (newFoodObject) =>{

    const newFood = {
      name: newFoodObject.name,
      calories: newFoodObject.calories,
      image: newFoodObject.image
    }    
    const copyOfTodaysFoods = [...this.state.todaysFoods];

    copyOfTodaysFoods.unshift(newFood);

    this.setState({todaysFoods: copyOfTodaysFoods});

    
    
  }


  showFoods = () => {
    return this.state.foodList.map((eachFood, index)=>{
      return <FoodBox
       key={index}
       addToList = {this.addFoodToList}
        foodName={eachFood.name}
         calories={eachFood.calories}
          image={eachFood.image}/>
    })
  }



  addNewFood = (e, newFoodObject) =>{
    e.preventDefault();
    const newFood = {
      name: newFoodObject.foodNameInput,
      calories: newFoodObject.caloriesInput,
      image: newFoodObject.imageInput
    }    
    const copyOfFoodList = [...this.state.foodList];

    copyOfFoodList.unshift(newFood);

    this.setState({foodList: copyOfFoodList, allFoods: copyOfFoodList});

    console.log(this.state)

  }

  toggleForm = () => {
    this.setState({formShowing: !this.state.formShowing})
  }

 

  searchFunction = (searchTerm)=>{
    let theList = [...this.state.allFoods];
    theList = theList.filter((eachFood)=>{
      return eachFood.name.toUpperCase().includes(searchTerm.toUpperCase())
    })

    this.setState({foodList: theList});
  }

  render() {
    return (
      <div className="App">
      <h1 className="title">Welcome To Awesome Food App</h1>

      


      <div className="add-new">
      
      <TodaysFoods todaysFoods={this.state.todaysFoods} />



        <button  
        onClick={()=> this.toggleForm()} 
        className="button is-info toggle-btn">
        {this.state.formShowing? 'Hide The Form' : 'Show Me The Form'}
        </button>

       {this.state.formShowing && <AddFood  submitForm={this.addNewFood} /> } 
      </div>

      <div className="list">
      <Search handleSearch={this.searchFunction} />
      {this.showFoods()}
      </div>
      </div>
    );
  }
}

export default App;
