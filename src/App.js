import './App.css';
import React, { useEffect, useState } from 'react'
import RecipeCard from './components/RecipeCard.js'
import recipes from './components/recipes.js'
import Navbar from './components/Navbar.js'
import ReactGA from "react-ga4";

function CreateRecipeCard(recipe) {
  return (
    <RecipeCard
      key={recipe.id}
      title={recipe.title}
      image={recipe.image}
      description={recipe.description}
      location={recipe.location}
      author={recipe.author}
      likes={recipe.likes}
    />
  );
}

function App() {
  useEffect(() => {
    ReactGA.initialize("G-28M3TNC840")
    ReactGA.send({ hitType: 'pageview', page: '/' })
  }, [])
  const [selectedLocation, setSelectedLocationState] = useState("");
  const [recipesWithLocation, setRecipesWithLocationState] = useState("");
  return (
    <div>
      <Navbar />
      <div className='recipeHeader'>
        <h1 className='recipeListLabel'>
          <span>Recipe list</span>
        </h1>
      </div>
      <div className='container p-5'>
        <select className="custom-select" defaultValue='Any' onChange={(e) => {
          var selectedLocation = e.target.value;
          setSelectedLocationState(selectedLocation);

          var recipesToUse = recipes.filter((recipe) => {
            for (let i = 0; i < recipe.location.length; i++) {
              if (selectedLocation === 'Any') {
                return recipe
              }
              else if (recipe.location[i] === selectedLocation) {
                return recipe
              }
            }
          })
          if (recipesToUse.length !== 0) setRecipesWithLocationState(recipesToUse)
        }}>
          <option>Any</option>
          <option value="CollegeAve">CollegeAve</option>
          <option value="Livingston">Livingston</option>
          <option value="CookDouglass">CookDouglass</option>
          <option value="Busch">Busch</option>
        </select>
      </div>
      <div className='row'>
        {recipesWithLocation.length > 0 ?
          recipesWithLocation.map(CreateRecipeCard) :
          (recipesWithLocation === '' ?
            recipes.map(CreateRecipeCard) :
            <div className='noneFound'>
              <h1 >No Results found!</h1> </div>
          )}
      </div>
    </div>
  );
}

export default App;
