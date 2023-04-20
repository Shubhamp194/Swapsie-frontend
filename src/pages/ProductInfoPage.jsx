import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductInfoCard from "../components/ProductInfoCard";

function ProductInfoPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({
    id: "",
    name: "",
    description: "",
    imgLink: "",
    user: {
      id: "",
      email: "",
      password: "",
      fname: "",
      lname: "",
    },
  });

  async function loadProducts() {
    const response = await axios.get(`http://localhost:8081/product/${id}`);
    setProduct(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="Product-info-page">
      <h3>{product.name} Details</h3>
      <ProductInfoCard
        name={product.name}
        imgLink={product.imgLink}
        description={product.description}
        owner={product.user.fname + " " + product.user.lname}
      />
    </div>
  );
}

export default ProductInfoPage;
