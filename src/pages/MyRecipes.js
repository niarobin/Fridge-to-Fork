import React from 'react';
// import reportWebVitals from './reportWebVitals.js';
// import ReactDOM from 'react-dom';
import curry from '../images/curry_1_75.jpeg';
// import recipes from '../utils/fetchFilteredRecipes';
import recipes from "../data/full_format_recipes.json";

const MyRecipes = () => { 
    return(
        <div className="my-recipes"> 
            <h1>My Recipes</h1>
            <div className="main-content">
            <img src={curry} alt="curryimage" className="curryimage" style={{height:400, width:460}}/>
            <p>
            <p className="custom-font custom font-size title" style={{ color: '#DF6262' }}>Saved recipes</p>
            </p>
            </div>
        </div>
    ) 
} 
  
{
    recipes.map((value, index) => {        
    return <a key={index} href={"/"+value["title"]}></a>
 })}
export default MyRecipes;