const MyRecipesButton = ({ to }) => { 
  
    return ( 
        <a href={`/${to}`}> 
            <button className="my-recipes-button"> 
                My Recipes {to === '' ? "MyRecipes" : to} 
            </button> 
        </a> 
    ) 
} 
  
export default MyRecipesButton;