import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [Email, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const handleLogin = () => {
    // Replace this with your actual authentication logic
    if (Email === "yourEmail" && Password === "yourPassword") {
      toast.success("Login successful!");
    } else {
      toast.error("Invalid credentials. Please try again.");
    }
  };

  return (
    <>
      <h2 className="text-center mt-3">Login</h2>
      <div className="container d-flex border border-5  justify-content-center align-items-center mt-4 " style={{ height:"100vh",width: "275px", height: "325px",backgroundColor: "#d6ccc2" }}>
        <form>
          <div className="form-group">
            <label htmlFor="formUsername">Email</label>
            <input type="email" className="form-control" id="formUsername" placeholder="Enter your username" value={Email} onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="formPassword">Password</label>
            <input type="password" className="form-control" id="formPassword" placeholder="Enter your password" value={Password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <br />
          <div className="d-grid">
            <button type="button" className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
