//import logo from './logo.svg';
import './App.css';

//<text1 id="1" x="100" y="200" font-family="Yeseva One" font-size="54" fill="white">Fridge to Fork.</text1>

<color name="lightapple">#E8D7D7</color> //for keeping track of colors??

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <MyRecipesButton />
        <text1>Fridge to Fork.</text1>

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


