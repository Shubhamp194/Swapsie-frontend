import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "../router/route";

function Registration() {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log("submitted");
    // console.log(user);
    await axios.post("http://localhost:8081/user/register", user);
    alert("Registration successful\nRedirecting to Login Page");
    navigate(routes.LoginPage);
    // window.location.reload(true);
  }

  return (
    <div className="RegistrationPage">
      <div className="form-box">
        <h2>Create Account</h2>
        <form className="registration-form" onSubmit={handleSubmit}>
          <label>First Name</label>
          <input
            name="fname"
            type="text"
            value={user.fName}
            placeholder="Enter first  name"
            onChange={handleChange}
          />
          <label>Last Name</label>
          <input
            name="lname"
            type="text"
            value={user.lName}
            placeholder="Enter last  name"
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            name="email"
            type="text"
            value={user.email}
            placeholder="Enter your email"
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={user.password}
            placeholder="Create a password"
            onChange={handleChange}
          />
          {/* <label>Confirm Password : </label>
        <input type="text" placeholder="Re-enter your password" /> */}
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
