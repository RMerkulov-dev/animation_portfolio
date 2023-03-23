import { Route, Routes } from "react-router-dom";
import HomePage from "./views/homePage/HomePage";

import ShoppingPage from "./views/shoppingPage/ShoppingPage";
import ProductDetails from "./views/productDetails/ProductDetails";
import Cart from "./views/cart/Cart";
import Checkout from "./views/chekout/Chekout";
import LoginPage from "./views/loginPage/LoginPage";
import SignupPage from "./views/signupPage/SignupPage";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShoppingPage />} />
        <Route path="/shop/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
};
