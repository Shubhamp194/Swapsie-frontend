import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import RequestItems from "../pages/RequestItems";
import Registration from "../pages/Registration";
import AllProducts from "../pages/AllProducts";
import MyProducts from "../pages/MyProducts";
import AllUsers from "../pages/AllUsers";
import route from "./route";
import AddProduct from "../pages/AddProduct";
import ProductInfoPage from "../pages/ProductInfoPage";
import MyProfile from "../pages/MyProfile";
import TradeRequests from "../pages/TradeRequests";

function AppRouter() {
  return (
    <div className="AppRouter">
      <Routes>
        <Route path={route.LandingPage} element={<AllProducts />} />
        <Route path={route.AllUsers} element={<AllUsers />} />
        <Route path={route.LandingPage} element={<AllUsers />} />
        <Route path={route.AllProducts} element={<AllProducts />} />
        <Route path={route.LoginPage} element={<Login />} />
        <Route path={route.MyProducts} element={<MyProducts />} />
        <Route path={route.AddProduct} element={<AddProduct />} />
        <Route path={route.Registration} element={<Registration />} />
        <Route path={route.ProductInfo} element={<ProductInfoPage />} />
        <Route path={route.MyProfile} element={<MyProfile />} />
        <Route path={route.TradeRequests} element={<TradeRequests />} />
        <Route path="/*" element={<AllUsers />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
