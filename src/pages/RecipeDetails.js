import React from 'react';
import { useParams } from 'react-router-dom';
import recipes from "../data/full_format_recipes.json";

const RecipeDetails = () => {
  const { title } = useParams();
  const recipe = recipes.find((recipe) => recipe.title === decodeURIComponent(title));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="recipe-details">
      <h1>{recipe.title}</h1>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Directions:</h3>
      <ol>
        {recipe.directions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <h3>Nutritional Information:</h3>
      <ul>
        <li>Calories: {recipe.calories}</li>
        <li>Fat: {recipe.fat}g</li>
        <li>Protein: {recipe.protein}g</li>
        <li>Sodium: {recipe.sodium}mg</li>
      </ul>
    </div>
  );
};

export default RecipeDetails;
