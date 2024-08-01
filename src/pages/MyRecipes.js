// import React from 'react';
// import { Link } from 'react-router-dom';
// import curry from '../images/curry_1_75.jpeg';
// import recipes from "../data/full_format_recipes.json";

// const MyRecipes = () => {
//   return (
//     <div className="my-recipes">
//       <h1>My Recipes</h1>
//       <div className="main-content">
//         <img src={curry} alt="curryimage" className="curryimage" style={{ height: 400, width: 460 }} />
//         <p>
//           <span className="custom-font custom-font-size title" style={{ color: '#DF6262' }}>Saved recipes</span>
//         </p>
//         <div className="recipes-list">
//           {recipes.map((recipe, index) => (
//             <div key={index} className="recipe" style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
//               <Link to={`/recipe/${encodeURIComponent(recipe.title)}`}>
//                 <h2>{recipe.title}</h2>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import curry from '../images/curry_1_75.jpeg';
import recipes from "../data/full_format_recipes.json";

const MyRecipes = () => {
  const [input, setInput] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const value = input.trim();

      if (value === '') {
        setFilteredRecipes([]);
        return;
      }

      const ingredientsArray = value.split(',').map((ingredient) => ingredient.trim().toLowerCase());

      const filtered = recipes.filter((recipe) => {
        if (!recipe.ingredients) {
          return false;
        }
        const recipeIngredients = recipe.ingredients.map((ingredient) => ingredient.toLowerCase());
        return recipeIngredients.every((ingredient) => ingredientsArray.includes(ingredient));
      });

      setFilteredRecipes(filtered);
    }
  };

  return (
    <div className="my-recipes">
      <h1>My Recipes</h1>
      <div className="main-content">
        <img src={curry} alt="curryimage" className="curryimage" style={{ height: 400, width: 460 }} />
        <p>
          <span className="custom-font custom-font-size title" style={{ color: '#DF6262' }}>Saved recipes</span>
        </p>
        <input
          type="text"
          placeholder="Enter ingredients, separated by commas"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          style={{ width: '80%', padding: '10px', margin: '20px 0', fontSize: '16px' }}
        />
        <div className="recipes-list">
          {filteredRecipes.map((recipe, index) => (
            <div key={index} className="recipe" style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
              <Link to={`/recipe/${encodeURIComponent(recipe.title)}`}>
                <h2>{recipe.title}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyRecipes;
