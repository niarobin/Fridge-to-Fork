//import logo from './logo.svg';
import './App.css';

// import pages and buttons
import { 
  BrowserRouter as Router, Routes, 
  Route 
} from "react-router-dom"; 
import MyRecipes from "./pages/MyRecipes"; 
import MyRecipesButton from "./components/MyRecipesButton"; 

//<text1 id="1" x="100" y="200" font-family="Yeseva One" font-size="54" fill="white">Fridge to Fork.</text1>

<color name="lightapple">#E8D7D7</color> //for keeping track of colors??

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <MyRecipesButton />
        <p className="custom-font custom font-size title" >Fridge to Fork.</p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
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


