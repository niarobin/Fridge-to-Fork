import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import recipes from "../data/full_format_recipes.json";
import curry from '../images/curry_1_75.jpeg';
import Fuse from 'fuse.js';
import './MyRecipes.css'; // Ensure this file exists for custom styling

const MyRecipes = () => {
  const [input, setInput] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  // Initialize Fuse.js with recipe titles and ingredients
  const fuse = new Fuse(recipes, {
    keys: ['title', 'ingredients'],
    includeScore: true,
    threshold: 0.3, // Adjust this threshold for fuzzy search sensitivity
  });

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

      // Perform fuzzy search
      const results = fuse.search(value);
      const filtered = results.map(result => result.item);

      setFilteredRecipes(filtered);
    }
  };

  return (
    <div className="my-recipes" style={{ backgroundColor: '#FFFFFF' }}>
      <h1>My Recipes</h1>
      <div className="main-content">
        <input
          type="text"
          placeholder="Enter ingredients, separated by commas"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          style={{ width: '80%', padding: '10px', margin: '20px 0', fontSize: '16px' }}
        />

        {input === '' && (
          <img src={curry} alt="curryimage" className="curryimage" style={{ height: 400, width: 460 }} />
        )}

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
