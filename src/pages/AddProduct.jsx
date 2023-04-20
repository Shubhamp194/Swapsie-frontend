import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "../router/route";
import { UserContext } from "../contexts/UserContext";

function AddProduct() {
  const { user, setUser } = useContext(UserContext);

  let navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    imgLink: "",
    user: {
      id: "",
    },
  });

  function checkLogin() {
    if (user == null) {
      alert("Please login first !!! \nRedirecting to Login Page");
      navigate(routes.LoginPage);
    }
  }

  useEffect(() => {
    checkLogin();
  }, []);

  function handleChange(e) {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  }

  function setOwner() {
    setProduct({
      ...product,
      [user]: { user },
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setOwner();
    await axios.post("http://localhost:8081/product/add", product);
    // console.log(product);
    alert("Product added successfully \nRedirecting to Home Page");
    navigate(routes.LandingPage);
    // window.location.reload(true);
  }

  return (
    <div className="Add-product-page">
      <div className="form-box">
        <h2>Add Product</h2>
        <form className="add-product-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name of the product"
            value={product.name}
            onChange={handleChange}
          />

          <label>Description</label>
          <input
            type="text"
            name="description"
            placeholder="Describe your product"
            value={product.description}
            onChange={handleChange}
          />

          <label>Image Link</label>
          <input
            type="text"
            name="imgLink"
            placeholder="Link to image of product"
            value={product.imgLink}
            onChange={handleChange}
          />

          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
