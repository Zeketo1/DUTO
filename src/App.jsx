import React, { createContext, useEffect, useState } from "react";
import Home from "./assets/Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./assets/Components/Header/sideBar";
import NotFound from "./NotFound";
import Header from "./assets/Components/Header/Header";
import ProductDetails from "./assets/Components/Products/ProductDetails";
import Cart from "./assets/Components/Cart/Cart";
import Login from "./assets/Components/Auth/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./assets/Components/Footer/Footer";

export const sideBarContext = createContext();

const App = () => {
  const [bar, setBar] = useState(
    "right-[-100%] bg-[#000] min-h-[100vh] w-[37.8rem] top-0 fixed z-[9999] "
  );

  const [showLogin, setShowLogin] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      user &&
        setTimeout(() => {
          setShowLogin(false);
        }, 1000);
    });
  }, []);

  return (
    <sideBarContext.Provider value={{ bar, setBar }}>
      <BrowserRouter>
        {showLogin && (
          <Login showLogin={showLogin} setShowLogin={setShowLogin} />
        )}
        <Header setShowLogin={setShowLogin} />
        <ToastContainer theme="dark" />
        <SideBar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Cart />} path="/cart" />
          <Route element={<ProductDetails />} path="/product/:id" />
          <Route element={<NotFound />} path="*" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </sideBarContext.Provider>
  );
};

export default App;
