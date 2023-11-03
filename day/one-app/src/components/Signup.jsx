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
  );
};

export default Signup;
