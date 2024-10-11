import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/index";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import "./App.css"; // Add some CSS for layout styling

function App() {
  return (
    <Router>
      <div className="app-overlay-container">
        {/* This overlay will create the pale, grayish effect */}
        <div className="overlay"></div>
        <Header blogName="English for I" />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer blogName="English for I" />
      </div>
    </Router>
  );
}

export default App;
