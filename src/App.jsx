import React from "react";
import Header from "./components/Header/index";
import Hero from "./components/Hero/index";
import ContainerBody from "./components/ContainerBody";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer/index";

import "./App.css"; // Add some CSS for layout styling
import SeamlessGallery from "./components/ReviewContainer";

function App() {
  return (
    <div className="app-overlay-container">
      {/* This overlay will create the pale, grayish effect */}
      <div className="overlay"></div>

      <div className="app-container">
        <Header blogName="English for I" />
        <Hero className="hero" />
        <ContainerBody />
        <SeamlessGallery />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
