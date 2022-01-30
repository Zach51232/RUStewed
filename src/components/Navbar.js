import ReactGA from "react-ga4";
export default function NavBar(){
return(
    <nav className="navbar navbar-expand-md navbar-light bg-light topnav">
    <a className="navbar-brand" href="/"     onClick={
      ()=>{
              ReactGA.initialize("G-28M3TNC840")
              ReactGA.event({
                category: "Button",
                action: "Clicked Home from navbar logo",
              });
              console.log('Home from navbar')
      }}>RUStewed</a>
    <a className='nav-link' href='https://docs.google.com/forms/d/e/1FAIpQLSetJAASQzImx0oBWHyNy1DMgvcd-GJi8FnHnMXH5PK3O2THdg/viewform' onClick={
        ()=>{
                ReactGA.initialize("G-28M3TNC840")
                ReactGA.event({
                  category: "Button",
                  action: "Clicked Add recipe",
                });
                console.log('Add recipe')
        }}       
>Add your recipe</a>
    </nav>
);
}