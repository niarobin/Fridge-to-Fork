//import logo from './logo.svg';
import './App.css';
import veggiesImage from '/Users/aileenniu/Fridge-to-Fork/src/images/veggies.png';

// import pages and buttons
import { 
  BrowserRouter as Router, Routes, 
  Route 
} from "react-router-dom"; 
import MyRecipes from "./pages/MyRecipes"; 
import MyRecipesButton from "./components/MyRecipesButton"; 

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
        <MyRecipesButton />
        </p>
        </div>
      </header>

      {/* route buttons */}
      <Router> 
        <MyRecipesButton to="my-recipes" /> 
        <Routes> 
            <Route path="/my-recipes"
                element={<MyRecipes />} /> 
        </Routes> 
      </Router> 
    </div>
  );
}

function My_RecipesButton() {
  return (
    <button>My Recipes</button>
  );
}

export default App;


