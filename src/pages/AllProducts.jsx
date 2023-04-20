import axios from "axios";
import React, { useEffect, useState } from "react";
import { imgUrls } from "../utils/constants";
import ProductCard from "../components/ProductCard";

function AllProducts() {
  const [products, setProducts] = useState([]);

  async function getData() {
    const response = await axios.get(
      "http://localhost:8081/product/getProducts"
    );
    setProducts(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>List of all available products</h2>
      <div className="All-products-page">
        {products.map((prod) => {
          return (
            <ProductCard
              key={prod.id}
              id={prod.id}
              name={prod.name}
              imgUrl={prod.imgLink}
              description={prod.description}
            />
          );
        })}

        <ProductCard
          name="Static Guitar"
          imgUrl={imgUrls.Guitar}
          description="This is a yamaha guitar"
        />

        <ProductCard
          name="Static Badminton"
          imgUrl={imgUrls.Badminton}
          description="This is a yonex badminton"
        />

        <ProductCard
          name="Static Chair"
          imgUrl={imgUrls.Chair}
          description="This is a comfortable chair"
        />

        <ProductCard
          name="Static Bike"
          imgUrl={imgUrls.KTM}
          description="This is a KTM bike"
        />

        <ProductCard
          name="Static Car"
          imgUrl={imgUrls.Car}
          description="This is a BMW car"
        />

        <ProductCard
          name="Static Laptop"
          imgUrl={imgUrls.Laptop}
          description="This is powerfull laptop"
        />
      </div>
    </>
  );
}

export default AllProducts;
