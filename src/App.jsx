import React from "react";
import Header from "./components/Header/index";
import "./App.css"; // Add some CSS for layout styling

function App() {
  return (
    <div className="app-container">
      <Header blogName="My Blog" />
    </div>
  );
}

export default App;
