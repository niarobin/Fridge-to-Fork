import logo from './logo.svg';
import './App.css';

<color name="lightapple">#E8D7D7</color>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <h1>Welcome to Fridge to Fork</h1>
        <MyRecipesButton />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

function MyRecipesButton() {
  return (
    <button>My Recipes</button>
  );
}

export default App;
