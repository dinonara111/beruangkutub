import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Navigation"; 
import Home from "./Pages/Home"; 
import Conservation from "./Pages/Conservation";
import Galeri from "./Pages/Galeri"; 
import About from "./Pages/About";
import Donation from "./Pages/Donation";

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conservation" element={<Conservation />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/about" element={<About />} />
        <Route path="/donation" element={<Donation />} />
      </Routes>
     
    </Router>
  );
};

export default App;
