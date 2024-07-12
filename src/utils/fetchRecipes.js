export async function fetchRecipes() {
    const response = await fetch('/full_format_recipes.json'); // Get the JSON file
    if (!response.ok) {
        throw new Error('Failed to fetch recipes'); // Handle errors
    }
    const recipes = await response.json(); // Convert JSON content to JavaScript Object
    return recipes;
}