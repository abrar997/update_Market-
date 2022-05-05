import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Cart from "./Components/Cart/Cart";
import Products from "./Components/Products/Producrs";
import Undefined from './Components/Undefined/Undefined'
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
    <div className="container ">
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Home />} path="/Home" />
        <Route element={<About />} path="/About" />
        <Route element={<Cart />} path="/Cart" />
        <Route element={<Products />} path="/Products" />
        <Route element={<Undefined/>} path="*" />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
