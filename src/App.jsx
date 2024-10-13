import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/index";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Study from "./pages/Study/Study";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css"; // Add some CSS for layout styling

function App() {
  return (
    <Router>
      <Header blogName="English for I" />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/study" element={<Study />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer blogName="English for IT" />
    </Router>
  );
}

export default App;
