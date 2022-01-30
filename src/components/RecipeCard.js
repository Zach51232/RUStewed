import React from 'react';

import '../App.css'
import { Link } from 'react-router-dom'
import ReactGA from "react-ga4";



export default function RecipeCard(props) {
  var image = props.image
  var title = props.title
  var description = props.description
  var author = props.author
  var location = props.location
  return (
    <div className='carditself col-lg-3 col-md-4 col-sm-6 col-6'>
      <div className="card border-dark text-center h-100">
        <img className="card-img-top" src={image} alt="Card" />
        <div className="card-body ">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <Link to='/recipe' className = 'toRecipe' state={
            [
              { image: image },
              { title: title },
              { description: description },
              { author: author },
              { location: location }
            ]
          } onClick={()=>{
            ReactGA.initialize("G-28M3TNC840")
            ReactGA.event({
              category: "Button",
              action: "Clicked go to recipe on a recipe card",
            });
          }}
          >
            See recipe
            <p className='card-author'>{author}</p>
          </Link>
          <div className='rowPics'>
            {
              location.length > 0 ? (location.map(function (location, i) {
                return (
                    <div className='columnPics' key={i}>
                        <img className='labelPlace' key={i} src={require('../imgs/' + location + '.jpg')} alt='location'></img>
                    </div>
                );
            })) : <p>no labels</p>
            }
          </div>
        </div>
      </div >
    </div >
  );
}