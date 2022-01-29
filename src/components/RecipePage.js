import { useEffect, React } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

export default function RecipePage() {
    const location = useLocation()
    let navigate = useNavigate()
    const a = useEffect(() => {
        if (location.state === null) navigate('/')
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
                <Link className='btn btn-primary' to='/'>Back to home
                </Link>
                <div className="jumbotron">
                    <h1 className="display-4">{title}</h1>
                    <img className='recipePic' src={img} alt='pictureOfFood'></img>
                    <div className="lead">
                        <h2>How to make it: </h2>
                        <p>{description}</p>
                    </div>
                </div>
                <div className='page'>
                    <div className='rowPics'>
                        <h2>Where to make it:</h2>
                        {
                            loc.length > 0 ? (loc.map(function (loc, i) {
                                return (
                                    <div className='columnPics' key={i}>
                                        <img className='labelPlace' key={i} src={require('../imgs/' + loc + '.jpg')} alt='location'></img>
                                    </div>
                                );
                            })) : <p>no labels</p>
                        }
                    </div>
                </div>
            </div>
        );
    }
    else {
        return <div>Head back - Recipe not found</div>
    }
}