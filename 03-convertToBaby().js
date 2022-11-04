/*
Write a function, convertToBaby(), that takes in an array as an argument
and, using a loop, returns a new array with each string in the array prepended with 'baby '.
 */

// Write your code here:
let convertToBaby = (array) => {
    let babyAnimals = [];
    for (let i = 0; i < array.length; i++) {
      babyAnimals.push(`baby ${array[i]}`);
    } return babyAnimals;
  };
  
  // When you're ready to test your code, uncomment the below and run:
  
  const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];
  
  console.log(convertToBaby(animals));
 
  /*
  prints
  [ 'baby panda',
  'baby turtle',
  'baby giraffe',
  'baby hippo',
  'baby sloth',
  'baby human' ]
  */