import React from "react";
import './Style.css';

import './Footer.css';
import { Link } from 'react-router-dom';




function Home() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About" target="_blank">About Us</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link" target="_blank">Sign Up</Link>
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
      <br></br>
      <br></br>
      <div className="recipe-container text-center mt-4">
        <h1>Recipes</h1>
      </div>
<br></br>
<br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="video-container d-flex">
            {/* Three YouTube videos covering the width of the entire webpage with gaps */}
            <div className="video mr-3">
            <iframe width="700" height="415" src="https://www.youtube.com/embed/hoZccEa0Pqo?si=6btoV82zROmt9Cev" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div className="video mr-3">
            <iframe width="700" height="415" src="https://www.youtube.com/embed/qP4SsfZBU98?si=6AUv4P7RhPnMD_eZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div className="video d-flex">
            <iframe width="700" height="415" src="https://www.youtube.com/embed/j3pDXY9fqSo?si=Ud5fsPIkyJiqYcSW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>About Us</h4>
              <p>Your company description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="col-md-4">
              <h4>Quick Links</h4>
              <ul className="list-unstyled">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About Us</Link></li>
                <li><Link to="/Contact">Contact Us</Link></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>Contact Us</h4>
              <address>
                <strong>Your Company</strong><br />
                123 Street Name<br />
                City, Country<br />
                Phone: (123) 456-7890<br />
                Email: info@yourcompany.com
              </address>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
