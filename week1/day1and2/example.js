
// function makeGroundBeefTaco (){
//   console.log('take taco shells and toast for 2 minutes');
//   console.log('sautee ground beef with cumin salt & pepper, and add to taco shell');
//   console.log('add lettuce, tomato to shell as well.');
//   console.log('dice tomato, onion, cilantro, jalapenos and squeeze a lime over it and add the salsa to the top of the taco')
// }


// makeGroundBeefTaco();

makeAnyTaco('soft corn tortilla', 'pork belly', ['sweet onion, cucumber', 'pickled pepper'], ['hot peppers', 'onion']);


function makeAnyTaco(shellType, meatType, condiments, salsaIngredients){
  toastTheShell(shellType);
  cookMeat(meatType);
  addCondiments(condiments);
  makeSalsa(salsaIngredients);
}

function toastTheShell(typeOfShell){
  console.log(`take ${typeOfShell} and toast for 2 minutes`);
}

function cookMeat(whichMeat){
  console.log(`saute or grill ${whichMeat} until done`);
  console.log(`add ${whichMeat} to taco`)
}

function addCondiments(condiments){
  condiments.forEach((oneCondiment)=>{
    console.log(`add ${oneCondiment} to taco`)
  })
}

function makeSalsa(ingredients){
console.log('dice the following ingredients and add to mixing bowl:')
  ingredients.forEach((blah)=>{
    console.log(blah);
  })

  console.log('squeeze lemon or lime over salsa ingredients, mix thoroughly, let it stand for a few minutes, then serve with tacos');

}
