import React from "react";
import './Style.css';
import vid from "../assets/recipe.mp4";
import './Footer.css';
import { Link } from 'react-router-dom';

import './Home.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Home() {
  return (

    
    <div className="container-fluid">
      <nav id="one" className="navbar navbar-expand-lg navbar-dark ">
        <div className="container">
          <a className="navbar-brand" href="/">RecipeFinder</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About" target="_blank">About Us</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                  Recipes
                </a>
                <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/fried">Fried Rice Recipe</Link></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link" target="_blank">Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link to="/log" className="nav-link" target="_blank">Log In</Link>
              </li>
              <li className="nav-item">
  <Link to="/recipes/new" className="nav-link" target="_blank">Create Recipe</Link>
</li>

            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <br></br>
      
<div style={{ position: 'relative', height: '900px', overflow: 'hidden', maxWidth: '100%', backgroundColor: '#ebebeb' }}>
  <video style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'cover' }} autoPlay loop muted>
    <source src={vid} type="video/mp4" />
  </video>
</div>


      <br></br>
      <br></br>
      <br></br>



      <div className="recipe-container text-center mt-4 ">
        <h1>Recipes</h1>
      </div>

      
      <br></br>
      <br></br>
      <br></br>
      
      <div className="row mt-4">
  <div className="col-12">
    <div className="row">
      <div className="col-12 col-md-4 mb-3">
        <iframe className="w-100" height="450" src="https://www.youtube.com/embed/hoZccEa0Pqo?si=6btoV82zROmt9Cev" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className="col-12 col-md-4 mb-3">
        <iframe className="w-100" height="450" src="https://www.youtube.com/embed/qP4SsfZBU98?si=6AUv4P7RhPnMD_eZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className="col-12 col-md-4 mb-3">
        <iframe className="w-100" height="450" src="https://www.youtube.com/embed/j3pDXY9fqSo?si=Ud5fsPIkyJiqYcSW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</div>
<br></br>
<hr></hr>
<br></br>
<div className="row mt-4">
  <div className="col-12">
    <div className="row">
      <div className="col-12 col-md-4 mb-3">
        <iframe className="w-100" height="450" src="https://www.youtube.com/embed/PK0czgdbHoY?si=T4C-IxdhCNI1HVZS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className="col-12 col-md-4 mb-3">
        <iframe className="w-100" height="450" src="https://www.youtube.com/embed/U1LVDFwi8qI?si=80sAXl-lqUSpa2Ym" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className="col-12 col-md-4 mb-3">
        <iframe className="w-100" height="450" src="https://www.youtube.com/embed/qMAYG-soxhw?si=It468opBvc079rko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</div>
<br></br>
<hr></hr>
<br></br>
<div className="row mt-4">
  <div className="col-12">
    <div className="row">
      <div className="col-12 col-md-4 mb-3">
        <iframe className="w-100" height="450" src="https://www.youtube.com/embed/aGS4LcMRZRU?si=gj1F8hI3sGNGdWLX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className="col-12 col-md-4 mb-3">
        <iframe className="w-100" height="450" src="https://www.youtube.com/embed/GptRW9Lsyj0?si=LUobAGj8V4EhqOIN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className="col-12 col-md-4 mb-3">
        <iframe className="w-100" height="450" src="https://www.youtube.com/embed/E-7rGboE-UQ?si=qfIC0omq_ogwIWDr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</div>


      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
     
      
      <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col-md-4 mb-3">
        <h4>About Us</h4>
        {/* Your content */}
      </div>
      <div className="col-md-4 mb-3">
        <h4>Quick Links</h4>
        <ul className="list-unstyled">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About Us</Link></li>
         
        </ul>
      </div>
      <div className="col-md-4 mb-3">
        <h4>Contact Us</h4>
        <address>
          <strong>Your Company</strong><br />
          @Sahyadri College Of Engineering And Management<br />
          Mangalore,India<br />
          Phone: (123) 456-7890<br />
          Email: recipefinder@gmail.com
        </address>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}

export default Home;
