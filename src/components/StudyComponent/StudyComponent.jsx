import React, { useEffect, useState } from "react";
import "./style.css"; // Import the CSS file for styles

function StudyComponent() {
  const [advice, setAdvice] = useState(""); // State for advice text

  // Function to fetch advice from the API
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice); // Set the advice from the API
  }

  // Fetch the first piece of advice when the component mounts
  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="studyBlock">
      <h3>Get your advice for today:</h3>
      {/* Advice Section */}
      <div className="advice-container">
        <h5 className="advice-text">{advice}</h5>
        <button className="advice-button" onClick={getAdvice}>
          New phrase
        </button>
      </div>
    </div>
  );
}

export default StudyComponent;
