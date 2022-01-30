import './App.css';
import React, { useEffect, useState } from 'react'
import RecipeCard from './components/RecipeCard.js'
import recipes from './components/recipes.js'
import Navbar from './components/Navbar.js'
import ReactGA from "react-ga4";
import Contact from './components/Contact.js'
import RecipeHeader from './components/RecipeHeader.js'
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
    ReactGA.initialize("G-3RK4JBPND1")
    ReactGA.event({ 
      category: 'page',
      action: '/'
  })
}, [])
  const [selectedLocation, setSelectedLocationState] = useState("");
  const [recipesWithLocation, setRecipesWithLocationState] = useState("");
  return (
    <div>
      <Navbar />
      <RecipeHeader/>
      <div className='container p-5'>
        <select className="custom-select" defaultValue='Any Campus' onChange={(e) => {
          var loc = e.target.value;
          ReactGA.initialize("G-3RK4JBPND1")
          ReactGA.event({
            category: "Dropdown",
            action: "Set campus to"+loc
          });
          if(!loc) console.log(selectedLocation)
          setSelectedLocationState(loc);
          var recipesToUse = recipes.filter((recipe,p) => {
            for (let i = 0; i < recipe.location.length; i++) {
              if (loc === 'Any Campus') {
                return recipe
              }
              else if (recipe.location[i] === loc) {
                return recipe
              }
            }
            return null
          })
          if (recipesToUse.length !== 0) setRecipesWithLocationState(recipesToUse)
        }}>
          <option>Any Campus</option>
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
      <Contact/>
    </div>
  );
}

export default App;
