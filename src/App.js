import { Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};
