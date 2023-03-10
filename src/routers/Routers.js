import { Route, Routes } from "react-router-dom";
import HomePage from "../views/HomePage/HomePage";
import ShoppingPage from "../views/ShoppingPage/ShoppingPage";
import ProductDetails from "../views/ProductDetails/ProductDetails";
import Cart from "../views/Cart/Cart";
import Checkout from "../views/Chekout/Chekout";
import LoginPage from "../views/LoginPage/LoginPage";
import SignupPage from "../views/SignupPage/SignupPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="home" element={<HomePage />} />
      <Route path="shop" element={<ShoppingPage />} />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
    </Routes>
  );
};

export default Routers;
