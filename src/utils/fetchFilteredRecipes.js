
const readline = require('readline');
var data = require('../data/full_format_recipes.json') // data is an object of objects

// remove recipes that do not have ingredients or 
data = data.filter(recipe => recipe.ingredients && recipe.ingredients.length > 0
    && recipe.directions && recipe.directions.length > 0);

// food is an array of ingredients the user gives
function filterByIngredients(food, recipes) {
    return recipes
      .filter(recipe => // recipe is just a variable that represents on recipe
        recipe.ingredients && // Check if ingredients is defined
        recipe.ingredients.every(ingredient => // check if every ingredient in recipe is in the food array
          food.some(item => ingredient.includes(item)) // checks if ingredient is in food in any way... helpful bc the ingredients include measurements
        )
      )
      .map(recipe => recipe.title); // get the titles of the filtered recipes
}

function getTitlesSorted(titles, category, ascending = true) {
    return titles
      .sort((titleA, titleB) => {
        let recipeA = data.find(recipe => recipe.title === titleA);
        let recipeB = data.find(recipe => recipe.title === titleB);
  
        // extract values of a specific category for recipeA and recipeB
        let valueA = recipeA ? recipeA[category] : '';
        let valueB = recipeB ? recipeB[category] : '';
  
        if (typeof valueA === 'string') {
          valueA = valueA.toLowerCase();
          valueB = valueB.toLowerCase();
        }
  
        if (valueA < valueB) {
          return ascending ? -1 : 1;
        }
        if (valueA > valueB) {
          return ascending ? 1 : -1;
        }
        return 0;
      });
}

// Attempt to find the recipe in data based on the title
// This will be used when the user clicks a recipe

// var food = ['fennel', 'onion', 'butter', 'potato', 'chicken broth', 'milk']; // this will be determined by the user
// const userIngredients = prompt("Please enter your ingredients separated by a comma:").split(", ");
// // var filteredTitles = filterByIngredients(food, data);
// var filteredTitles = filterByIngredients(userIngredients, data);


// let category = 'title';
// let ascending = true;
// //var sortedTitles = getTitlesSorted(filteredTitles, category, ascending);

// console.log(getTitlesSorted(filteredTitles, category, ascending));

// Create an interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for ingredients
rl.question("Please enter your ingredients separated by a comma: ", (input) => {
  const userIngredients = input.split(", ").map(item => item.trim());
  var filteredTitles = filterByIngredients(userIngredients, data);

  let category = 'calories';
  let ascending = true;

  console.log(getTitlesSorted(filteredTitles, category, ascending));

  // Close the readline interface
  rl.close();
});
