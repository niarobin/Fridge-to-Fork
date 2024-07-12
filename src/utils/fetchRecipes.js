export async function fetchRecipes() {
    const response = await fetch('/full_format_recipes.json'); // Get the JSON file
    if (!response.ok) {
        throw new Error('Failed to fetch recipes'); // Handle errors
    }
    const recipes = await response.json(); // Convert JSON content to JavaScript Object
    return recipes;
}

// Want to print the recipes I fetched but I'm getting an error
fetchRecipes().then(recipes => {
    const firstThreeRecipes = recipes.slice(0, 3);
    console.log(firstThreeRecipes);
    // Use firstThreeRecipes as needed in your application
}).catch(error => {
    console.error('Error fetching or processing recipes:', error);
});