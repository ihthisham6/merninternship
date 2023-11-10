// // SignUp.jsx
// import React ,{useState}from   'react';
// import './Signup.css'; // Import the CSS file
// import { toast, ToastContainer } from "react-toastify";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Signup = () => {
//   const [Name, setName] = useState("");
//   const [Usn, setUsn] = useState("");
//   const [Gender, setGender] = useState("");
//   const [Email, setEmail] = useState("");
//   const [Mobile, setMobile] = useState("");
//   const [Password, setPassword] = useState("");

//   const handleRegister = async () => {
//     try {
//       const response = await axios.post("localhost:5000/register", {
//         Name,
//         Usn,
//         Gender,
//         Email,
//         Mobile,
//         Password,
//       });
//       console.log(response);

//       // Assuming your backend returns a success message
//       toast.success(response.data.message);
//     } catch (error) {
//       // Handle registration failure
//       toast.error("Registration failed. Please try again.");
//     }
//   };

// // const Signup = () => {
//   return (
//     <div className="signup-container width-300px ">
//       <div className="container ">
//         <div className="row ">
//           <div className="col-md-12">
//             <div className="signup-form">
//               <h2 class="text-center">Sign Up</h2>
//               <form>
//                 <div className="form-group">
//                   <label htmlFor="name">Name</label>
//                   <input type="text" className="form-control" id="name" placeholder="Your Name"  />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="email">Email</label>
//                   <input type="email" className="form-control" id="email" placeholder="Your Email" />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="password">Password</label>
//                   <input type="password" className="form-control" id="password" placeholder="Password" />
//                 </div>
//                 <button type="submit" className="btn btn-primary btn-block" onClick={handleRegister}>Sign Up</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from "react";
import "./Signup.css"; // Import the CSS file
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
const Signup = () => {
  const [Name, setName] = useState("");
  const [Usn, setUsn] = useState("");
  const [Gender, setGender] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("localhost:5000/register", {
        Name,
        Usn,
        Gender,
        Email,
        Mobile,
        Password,
      });
      console.log(response);

      // Assuming your backend returns a success message
      toast.success(response.data.message);
    } catch (error) {
      // Handle registration failure
      toast.error("Registration failed. Please try again.");
    }
  };

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
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      
    <div className="signup-container width-300px ">
      <div className="container ">
        <div className="row ">
          <div className="col-md-12">
            <div className="signup-form">
              <h2 className="text-center">Sign Up</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="usn">USN</label>
                  <input
                    type="text"
                    className="form-control"
                    id="usn"
                    placeholder="Your USN"
                    value={Usn}
                    onChange={(e) => setUsn(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <input
                    type="text"
                    className="form-control"
                    id="gender"
                    placeholder="Your Gender"
                    value={Gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mobile">Mobile</label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobile"
                    placeholder="Your Mobile"
                    value={Mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleRegister}
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Signup;
