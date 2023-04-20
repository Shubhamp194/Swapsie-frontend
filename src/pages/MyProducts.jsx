import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import routes from "../router/route";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { imgUrls } from "../utils/constants";

function MyProducts() {
  let navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const id = user.id;

  const [products, setProducts] = useState([]);

  async function getData() {
    const response = await axios.get(
      `http://localhost:8081/product/user/${id}`
    );
    setProducts(response.data);
  }

  useEffect(() => {
    if (user == null) {
      alert("Please login first !!! \nRedirecting to Login Page");
      navigate(routes.LoginPage);
    } else {
      getData();
      console.log(products);
    }
  }, []);

  return (
    <div>
      <h2>My Products</h2>

      <div className="My-products-page">
        {products.map((prod) => {
          return (
            <ProductCard
              key={prod.id}
              id={prod.id}
              name={prod.name}
              imgUrl={prod.imgLink}
              description={prod.description}
              owner={prod.user.fname}
            />
          );
        })}

        <ProductCard
          name="Static Guitar"
          imgUrl={imgUrls.Guitar}
          description="This is a yamaha guitar"
        />

        <ProductCard
          name="Static Bike"
          imgUrl={imgUrls.KTM}
          description="This is a KTM bike"
        />
      </div>
    </div>
  );
}

export default MyProducts;
