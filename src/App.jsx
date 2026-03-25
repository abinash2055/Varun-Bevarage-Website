import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Importing from Pages
import About from "./pages/About";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Terms from "./pages/policies/Terms";
import Policy from "./pages/policies/Policy";
import Disclaimer from "./pages/policies/Disclaimer";
import Brands from "./pages/Brands";
import Media from "./pages/Media";

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Main content exactly below navbar */}
        <main className="flex-grow">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<Contact />} />

            {/* Policy Pages */}
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Policy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />

            {/* Other Pages */}
            <Route path="/brands" element={<Brands />} />
            <Route path="/media" element={<Media />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;
