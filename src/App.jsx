import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/index";
import ScrollToTop from "./components/Scroll/ScrollToTop";
import Home from "./pages/Home/Home";
import Study from "./pages/Study/Study";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Admin from "./pages/Admin/Admin";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Header blogName="English for I" />
      <ScrollToTop /> {/* ScrollToTop component */}
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/study" element={<Study />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          {/* Redirect to the CMS */}
        </Routes>
      </div>
      <Footer blogName="English for I" />
    </Router>
  );
};

export default App;
