// App.js

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyRecipes from "./pages/MyRecipes";
import RecipeDetails from "./pages/RecipeDetails";
import NavBar from "./components/NavBar/index.js";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/my-recipes" element={<MyRecipes />} />
          <Route path="/recipe/:title" element={<RecipeDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
