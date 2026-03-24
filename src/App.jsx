import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Importing from Pages
import About from "./pages/About";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Investor from "./pages/Investor";
import Products from "./pages/Products";
import Sustainability from "./pages/Sustainability";
import Terms from "./pages/policies/Terms";
import Policy from "./pages/policies/Policy";
import Disclaimer from "./pages/policies/Disclaimer";
import Brands from "./pages/Brands";

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            {/* Navbar  */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/community" element={<Community />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/investor" element={<Investor />} />
            <Route path="/contact" element={<Contact />} />

            {/* Footer  */}
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Policy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/brands" element={<Brands />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;
