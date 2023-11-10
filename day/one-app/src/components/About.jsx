import React from 'react';
import './About.css'; // Assuming you have a CSS file for these styles
import a from './a.jpg';
import d from './d.jpg';
import amjpg from './amjpg.jpg';
import i from './i.jpg';
import p from './p.jpg';
import { Link } from 'react-router-dom';

import pr from './pr.jpg';
const About = () => {
  return (
    

    <div className="container-fluid">
      {/* <div className="container-fluid"> */}
{/* <nav id="one" className="navbar navbar-expand-lg navbar-dark  width: '100%'  ">
        <div className="container">
          <a className="navbar-brand" href="/">RecipeFinder</a>
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
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Recipes
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Rice Recipes</a></li>
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
      </nav> */}
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
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
     
      
      
    </div>
    
     
      {/* <h1 className="text-center justify-content:center">Meet Our Team</h1> */}
     
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
        <h1 className="text-center">Meet Our Team</h1>
      </div>


      <div className="row">
        {/* Member 1 */}
        <div className="col-md-4 member-card">
          <img src={amjpg} alt="Member 1" />
          <h2>Aman</h2>
        <hr></hr>
          <pre>
           <b>Role:Web development Intern</b>
           <br></br>
           <pre>
             Student at
 SCEM
 </pre>
          </pre>
        </div>
        {/* Member 2 */}
        <div className="col-md-4 member-card">
          <img src={a} alt="Member 2" />
          <h2>Aksha</h2>
          <hr></hr>
          <pre>
           <b>Role:Web development Intern</b>
           <br></br>
           <pre>
             Student at
 SCEM
 </pre>
          </pre>
        </div>
        {/* Member 3 */}
        <div className="col-md-4 member-card">
          <img src={d} alt="Member 3" />
          <h2>Dayanand</h2>
          <hr></hr>
          <pre>
           <b>Role:Web development Intern</b>
           <br></br>
           <pre>
             Student at
 SCEM
 </pre>
          </pre>
        </div>
      </div>
      <div className="row">
        {/* Member 4 */}
        <div className="col-md-4 member-card">
          <img src={i} alt="Member 4" />
          <h2>Ihthisham</h2>
          <hr></hr>
          <pre>
           <b>Role:Web development Intern</b>
           <br></br>
           <pre>
             Student at
 SCEM
 </pre>
          </pre>
        </div>
        {/* Member 5 */}
        <div className="col-md-4 member-card">
          <img src={p} alt="Member 5" />
          <h2>Poornika</h2>
          <hr></hr>
          <pre>
           <b>Role:Web development Intern</b>
           <br></br>
           <pre>
             Student at
 SCEM
 </pre>
          </pre>
        </div>
        {/* Member 6 */}
        <div className="col-md-4 member-card">
          <img src={pr}alt="Member 6" />
          <h2>Prateeksha</h2>
          <hr></hr>
          <pre>
           <b>Role:Web development Intern</b>
           <br></br>
           <pre>
             Student at
 SCEM
 </pre>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default About;

