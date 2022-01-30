import { useEffect, React } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import ReactGA from "react-ga4";

export default function RecipePage() {
    const location = useLocation()
    let navigate = useNavigate()
    useEffect(() => {
        ReactGA.initialize("G-28M3TNC840")
        if (location.state === null) {
            ReactGA.event({
                category: "ErrorLoad",
                action: "@ recipe page w/ null location.state",
            });
            console.log('null state recipe')
            navigate('/')
        }
        else {
            var pagesrc = '/recipe/' + location.state[1].title
            ReactGA.send({ hitType: 'pageview', page: pagesrc })
            console.log('send pageview /recipe/'+location.state[1].title)
        }
    });
    if (location.state !== null) {
        var img = location.state[0].image
        var title = location.state[1].title
        var description = location.state[2].description
        var author = location.state[3].author
        var loc = location.state[4].location;
        return (
            <div>
                <Navbar />
                <Link className='btn btn-primary' to='/' onClick={() => {
                    ReactGA.event({
                        category: "Button",
                        action: "Clicked Home btn recipe-page",
                    });
                    console.log('clicked home primary')

                }
                }>Back to home
                </Link>
                <div className="jumbotron">
                    <h1 className="display-4">{title}</h1>
                    <img className='recipePic' src={img} alt='pictureOfFood'></img>
                    <div className="lead">
                        <h2>How to make it: </h2>
                        <p>{description}</p>
                    </div>
                </div>
                <div className='bottomHalf'>
                <div className='page'>
                <p><i>Contributed by {author}</i></p>
                    <div className = 'halls'>
                        <h5>Campus dining halls with ingredients:</h5>
                        {
                            loc.length > 0 ? (loc.map(function (loc, i) {
                                return (
                                    <div className='columnPicsTwo' key={i}>
                                        <img className='labelPlace' key={i} src={require('../imgs/' + loc + '.jpg')} alt='location'></img>
                                    </div>
                                );
                            }))
                            : <p>no labels</p>
                        }
                    </div>
                </div>
                </div>
            </div >
        );
    }
    else {
        return <div>Head back - Recipe not found</div>
    }
}