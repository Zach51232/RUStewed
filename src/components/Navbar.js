export default function NavBar(){
return(
    <nav className="navbar navbar-expand-md navbar-light bg-light topnav">
    <a className="navbar-brand" href="#">RUStewed</a>
    <a className='nav-link' href='https://forms.gle/1941f4XrKMCnyh7S9'>Add your recipe</a>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
        <li className="nav-item">
        <a className='nav-link' href='https://forms.gle/1941f4XrKMCnyh7S9'>Add your recipe</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Why I made This</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Contact Me</a>
        </li>
    </ul>
    </div>
    </nav>
);
}