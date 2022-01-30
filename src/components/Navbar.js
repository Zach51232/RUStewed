import ReactGA from "react-ga4";

export default function NavBar(){
return(
    <nav className="navbar navbar-expand-md navbar-light bg-light topnav">
    <a className="navbar-brand" href="/">RUStewed</a>
    <a className='nav-link' href='https://forms.gle/1941f4XrKMCnyh7S9' onClick={
        ()=>{
                ReactGA.initialize("G-28M3TNC840")
                ReactGA.event({
                  category: "Button",
                  action: "Clicked go back from navbar logo name",
                });
        }}       
>Add your recipe</a>
    </nav>
);
}