import './App.css';
import RecipeCard from './components/RecipeCard.js'
import recipes from './components/recipes.js'
import Navbar from './components/Navbar.js'
import React, { useState } from 'react'

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
      {console.log('made it here1 and selectedLocation=' + selectedLocation)}
      <div className='container p-5'>
        <select className="custom-select" defaultValue='Any' onChange={(e) => {
          var selectedLocation = e.target.value;
          setSelectedLocationState(selectedLocation);
          console.log('made it her2e and selectedLocation = ' + selectedLocation)

          var recipesToUse = recipes.filter((recipe) => {
            console.log('here before loop and recipe name is ' + recipe.title + 'and its size of location is ' + recipe.location.length + 'its first location is ' + recipe.location[0])
            for (let i = 0; i < recipe.location.length; i++) {
              if(selectedLocation=='Any'){
                return recipe
              }
              else if (recipe.location[i] === selectedLocation) {
                console.log('found a recipe with title: ' + recipe.title)
                return recipe
              }
            }
          })
          recipesToUse.length != 0 ? setRecipesWithLocationState(recipesToUse) : console.log('Empty')
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
