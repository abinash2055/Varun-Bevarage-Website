import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

// Importing from Pages
import About from "./pages/About";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Investor from "./pages/Investor";
import Products from "./pages/Products";
import Sustainability from "./pages/Sustainability";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/community" element={<Community />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/investor" element={<Investor />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
