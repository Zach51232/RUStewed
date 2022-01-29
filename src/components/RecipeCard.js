import React from 'react';


import '../App.css'
export default function RecipeCard(props) {
  return (
    <div className='carditself col-lg-3 col-md-4 col-sm-6 col-6'>
      <div className="card border-dark text-center h-100">
        <img className="card-img-top" src={props.image} alt="Card" />
        <div className="card-body ">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a className='toRecipe' href="https://www.google.com">
            See recipe
            <p className='card-author'>{props.author}</p>
          </a>
          <div className='rowPics'>
            <div className='columnPics'>
              {props.location.length >= 1 ? <img className='labelPlace' src={require('../imgs/' + props.location[0] + '.jpg')} alt='location'></img> : <p></p>}
            </div>
            <div className='columnPics'>
              {props.location.length >= 2 ? <img className='labelPlace' src={require('../imgs/' + props.location[1] + '.jpg')} alt='location'></img> : <p></p>}
            </div>
            <div className='columnPics'>
              {props.location.length === 3 ? <img className='labelPlace' src={require('../imgs/' + props.location[2] + '.jpg')} alt='location'></img> : <p></p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}