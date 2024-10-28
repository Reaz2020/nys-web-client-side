import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import the Navbar component
import Home from "./pages/Home"; // Import the Home page
import About from "./pages/About";
import Footer from "./components/Footer";

import "./App.css";
import { useState } from "react";
import Hero from "./components/Hero";
import Product_selection from "./components/Product_selection";

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    // status:'cart'
  });

  const handleCart = () => {
    setIsActive((prevState) => ({
      ...prevState, // Spread the previous state
      cart: !prevState.cart, // Toggle the cart property
    }));
  };

  return (
    <>
      <div>
        <Router>
          <Navbar handleCart={handleCart} /> {/* Navbar Component */}
          <Hero />
          <Product_selection></Product_selection>
          <Routes>
            <Route path="/" element={<Home isActive={isActive} />} />{" "}
            {/* Home Page Route */}
            <Route path="/About" element={<About />} />
       
          </Routes>
          <Footer></Footer>
        </Router>
      </div>
    </>
  );
}

export default App;
