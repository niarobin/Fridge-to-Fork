import curry from '../images/curry.jpeg';

const MyRecipes = () => { 
    return(
        <div className="my-recipes"> 
            <h1>My Recipes</h1>
            <div className="main-content">
            <img src={curry} alt="curryimage" className="curryimage" />
            <p>
            <p className="custom-font custom font-size title" style={{ color: '#DF6262' }}>Saved recipes</p>
            </p>
            </div>
        </div>
    ) 
} 
  
export default MyRecipes;




// <div className="App">
//       <header className="App-header">
//         <div className="main-content">
//         <img src={veggiesImage} alt="backgroundimage" className="backgroundimage" />
//         <p>
//         <p className="custom-font custom font-size title" style={{ color: '#DF6262' }}>Fridge to Fork.</p>
//         {/* <MyRecipesButton /> */}
//         </p>
//         </div>
//       </header>

//       {/* route buttons */}
//       <Router>
//         <NavBar />
//         {/* <MyRecipesButton to="my-recipes" />  */}
//         <Routes>
//             <Route exact path="/" element={<Home />} />
//             <Route
//               path="/my-recipes"
//               element={<MyRecipes />}
//             /> 
//         </Routes> 
//       </Router> 
//     </div>