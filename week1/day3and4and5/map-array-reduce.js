// var originalArray = [1,2,3,4,5,6,7,8,9];
// var newArray = []
// originalArray.forEach((oneNum)=>{
//   newArray.push(oneNum + 1);
// })
// console.log(newArray);

//  var originalArray = [1,2,3,4,5,6,7,8,9];
//  var newArray = originalArray.map((num)=>{
//    return num + 1
//  })
//  console.log(newArray);


// var arrayOfPeople = [
//   {name: 'lola', age: 24},
//   {name: 'randy', age: 33},
//   {name: 'paola', age: 19},
//   {name: 'will', age: 29}
// ];

// var arrayOfNames = arrayOfPeople.map((onePerson)=>{
//   return onePerson.name
// });

// console.log(arrayOfNames);


var arrayOfLowerCaseCities = ['miami', 'barcelona', 'atlanta', 'minneapolis', 'amsterdam', 'moscow'];


var capCities = arrayOfLowerCaseCities.map((oneCity)=>{
  return oneCity[0].toUpperCase() + oneCity.substr(1);
})

console.log(capCities);




// var nums = [24,16,33,17,5,15,9,11];
// var total = 0;
// nums.forEach((eachNum)=>{
//   total += eachNum
// })
// console.log(total);

// var nums = [24,16,33,17,5,15,9,11];

// var totalSum = nums.reduce((total, eachNum)=>{

//   return total + eachNum

// },0)

// console.log(totalSum);

// function findAvgWordLength(arrayOfWords){

  // var x = arrayOfWords.reduce((runningTotal, eachWord)=>{
  //   return runningTotal + eachWord.length;
  // },0)

//   return (x / arrayOfWords.length);
// }


// var words = ['tractor', 'skyscrapers', 'chicken', 'mango', 'cvs'];

// findAvgWordLength(words);


// var arrayOfNumerals = [2,4,7,5,4,9,8,7,6,5,1,2,4,6,5];

// var newArray = [];
// arrayOfNumerals.forEach((num)=>{
//   if(num >=5){
//     newArray.push(num);
//   }
// })
// console.log(newArray)

// arrayOfNumerals = [2,4,7,5,4,9,8,7,6,5,1,2,4,6,5];
// var fiveAndUp = arrayOfNumerals.filter((eachNum)=>{
//     return eachNum >= 5;
// })
// console.log(fiveAndUp);

// var words = ['car', 'hotel', 'river', 'car', 'bush', 'tree', 'river', 'hotel'];

// var noDupes = words.filter((eachWord, yindex)=>{
//   return words.indexOf(eachWord, yindex+1) === -1
// })

// console.log(noDupes)

// words.indexOf('bush', 5);



// var arrOfNums = [4,5,3,2,10,11,15,6,9,6,4,5,9,1,4,3,2];

// var arrOfWords = ['animals', 'radio', 'electricity', 'precarious', 'bylateral', 'diamond', 'glass']

// arrOfWords.sort((a,b)=>{
//   if(a.length < b.length){return -1}
//   if(b.length < a.length){return 1}
//   if(b.length == a.length){return 0}
// })

// console.log(arrOfWords);

// var products = [
//   {name: 'electric guitar', price: 280},
//   {name: 'speakers', price: 85},
//   {name: 'rip off sunglasses', price: 7},
//   {name: 'electric scooter', price: 225},
//   {name: 'polo shirt with a prestigious emblem', price: 150}
// ];


// products.sort((a,b)=>{
//   if(b.price < a.price){return 1}
//   if(a.price < b.price){return -1}
//   if(b.price == a.price){return 0}
// });
// console.log(products);