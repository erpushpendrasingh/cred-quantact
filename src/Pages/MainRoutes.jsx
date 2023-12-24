import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import MenuPages from "./MenuPages";
import ProductsPage from "./ProductsPage";
import ShowProduct from "./ShowProduct";
import SuccessPage from "./SuccessPage";
import Winnings from "./Winnings";
import UserRegister from "./UserRegister";
import SpinPage from "./SpinPage";

const MainRoutes = () => {
     return (
          <Routes>
               <Route path="/" element={<LandingPage />} />
               <Route path="/menu-page" element={<MenuPages />} />
               <Route path="/products-page" element={<ProductsPage />} />
               <Route path="/show-products" element={<ShowProduct />} />
               <Route path="/success-page" element={<SuccessPage />} />
               <Route path="/winnings" element={<Winnings />} />
               <Route path="/user-register" element={<UserRegister />} />
               <Route path="/spin-page" element={<SpinPage />} />
          </Routes>
     );
};

export default MainRoutes;
