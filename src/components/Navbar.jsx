import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import route from "../router/route";
import { UserContext } from "../contexts/UserContext";
import routes from "../router/route";

function Navbar() {
  let navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  function logout() {
    // console.log("logged out");
    setUser(null);
    alert("Logged out successfully \nRedirecting to Login Page");
    navigate(routes.LoginPage);
  }

  return (
    <div>
      <div style={{ backgroundColor: "black", padding: "5px" }}>
        <Link
          to={route.LandingPage}
          className="btn btn-info"
          style={{ margin: "5px" }}
        >
          Home
        </Link>

        {/* <Link
          to={route.Registration}
          className="btn btn-info"
          style={{ margin: "5px" }}
        >
          Create Account
        </Link> */}

        <Link
          to={route.AllProducts}
          className="btn btn-info"
          style={{ margin: "5px" }}
        >
          All Products
        </Link>

        <Link
          to={route.AllUsers}
          className="btn btn-info"
          style={{ margin: "5px" }}
        >
          All Users
        </Link>

        <Link
          to={route.MyProducts}
          className="btn btn-info"
          style={{ margin: "5px" }}
        >
          My Products
        </Link>

        <Link
          to={route.AddProduct}
          className="btn btn-success"
          style={{ margin: "5px" }}
        >
          Add Products
        </Link>

        <Link
          to={route.TradeRequests}
          className="btn btn-primary"
          style={{ margin: "5px" }}
        >
          Trade Requests
        </Link>

        {/* <Link
          to={route.ProductInfo}
          className="btn btn-info"
          style={{ margin: "5px" }}
        >
          Products Info Page
        </Link> */}

        {!user && (
          <Link
            to="/login"
            className="btn btn-primary"
            style={{ margin: "5px" }}
          >
            Login
          </Link>
        )}

        {user && (
          <Link
            to={route.MyProfile}
            className="btn btn-secondary"
            style={{ margin: "5px" }}
          >
            USER - {user.fname}
          </Link>
        )}

        {user && (
          <button
            className="btn btn-danger"
            onClick={logout}
            style={{ margin: "5px" }}
          >
            Logout
          </button>
        )}

        <button className="btn btn-warning" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
}

export default Navbar;
