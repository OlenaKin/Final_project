import React from "react";
import Header from "./components/Header/index";
import Hero from "./components/Hero/index";
import ContainerBody from "./components/ContainerBody";
import Footer from "./components/Footer/index";

import "./App.css"; // Add some CSS for layout styling

function App() {
  return (
    <div className="app-container">
      <Header blogName="My Blog" />
      <Hero />
      <ContainerBody />
    </div>
  );
}

export default App;
