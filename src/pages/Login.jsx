import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import routes from "../router/route";

function Login() {
  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { user, setUser } = useContext(UserContext);

  function onChangeHandler(e) {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmitHandler(e) {
    e.preventDefault();
    console.log("submitted");
    console.log(credentials);
    const response = await axios.post(
      "http://localhost:8081/user/login",
      credentials
    );
    setUser(response.data);
    alert("Login Successful \nRedirecting to the home page ");
    navigate(routes.LandingPage);
  }

  return (
    <div className="LoginPage">
      <div className="form-box">
        <h3>Login</h3>
        <form className="login-form" onSubmit={onSubmitHandler}>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            onChange={onChangeHandler}
            type="text"
            placeholder="Enter you email"
            value={credentials.email}
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            onChange={onChangeHandler}
            type="password"
            placeholder="Enter your password"
            value={credentials.password}
          />
          <button className="btn btn-primary" type="submit`">
            Login
          </button>

          <Link
            to={routes.Registration}
            className="btn btn-dark"
            style={{ margin: "5px" }}
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
