//import logo from './logo.svg';
import './App.css';
import veggiesImage from './images/veggies.png';

// import pages and buttons
import NavBar from "./components/NavBar/index.js";
import { 
  BrowserRouter as Router, Routes, 
  Route 
} from "react-router-dom"; 
import Home from "./pages/Home";
import MyRecipes from "./pages/MyRecipes"; 
import MyRecipesButton from "./components/MyRecipesButton";
import recipes from "./data/full_format_recipes";
import allDetails from "./utils/getSingleRecipe.js"

//<text1 id="1" x="100" y="200" font-family="Yeseva One" font-size="54" fill="white">Fridge to Fork.</text1>

<color name="lightapple">#E8D7D7</color> //apple: #DF6262

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="main-content">
        <img src={veggiesImage} alt="backgroundimage" className="backgroundimage" />
        <p>
        <p className="custom-font custom font-size title" style={{ color: '#DF6262' }}>Fridge to Fork.</p>
        {/* <MyRecipesButton /> */}
        </p>
        </div>
      </header>

      {/* route buttons */}
      <Router>
        <NavBar />
        {/* <MyRecipesButton to="my-recipes" />  */}
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              path="/my-recipes"
              element={<MyRecipes />}
            /> 
        </Routes>

        {/* display directions */}
        {/* <Switch>
            <Route exact path='/' exact component={Portfolio} />
            <Route exact path='/:id' exact component={Project} />             
            <Route component={ErrorPage} />
        </Switch> */}
      </Router> 
    </div>
  );
}

// function My_RecipesButton() {
//   return (
//     <button>My Recipes</button>
//   );
// }

export default App;


