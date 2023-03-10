import { Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShoppingPage from "./views/ShoppingPage/ShoppingPage";
import Routers from "./routers/Routers";

export const App = () => {
  return (
    <>
      <ToastContainer />
      {/*<Routes>*/}
      {/*  <Route path="/" element={<HomePage />} />*/}
      {/*  <Route path="/shop" element={<ShoppingPage />} />*/}
      {/*</Routes>*/}
      <Routers />
    </>
  );
};
