// This will be used when the user clicks a recipe

var data = require('../data/full_format_recipes.json') // data is an object of objects

// remove recipes that do not have ingredients or 
data = data.filter(recipe => recipe.ingredients && recipe.ingredients.length > 0
    && recipe.directions && recipe.directions.length > 0);


function allDetails(name) { // Attempt to find the recipe in data based on the title
    let recipe = data.find(recipe => recipe.title === name);

    return recipe;
}

// console.log(allDetails('Fully Salted Roast Chicken '))