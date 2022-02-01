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
    <div className='carditself col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6'>
      <Link to='/recipe' className='linkCard' state={
        [
          { image: image },
          { title: title },
          { description: description },
          { author: author },
          { location: location }
        ]
      } onClick={() => {
        ReactGA.initialize("G-3RK4JBPND1")
        ReactGA.event({
          category: "Button",
          action: "Clicked See Recipe",
        });
      }}>
        <div className="card border-dark text-center h-100">
          <img className="card-img-top" src={image} alt="Card" />
          <div className="card-body ">
            <h5 className="card-title">{title}</h5>
            <div className='below-title'>
              <p className="card-text">{description}</p>
              <p className='toRecipe'>See recipe</p>
              <p className='card-author'><i>{author}</i></p>
              <div className='rowPics'>
                <div>
                <p className='campusLabel'>Campus with ingredients: </p>
                </div>
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
          </div>
        </div >
      </Link>
    </div>
  );
}