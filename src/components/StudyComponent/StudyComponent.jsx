import React, { useEffect, useState } from "react";
import "./style.css"; // Import the CSS file for styles

function StudyComponent() {
  const [advice, setAdvice] = useState(""); // State for advice text
  const [count, setCount] = useState(0); // State for advice count

  // Function to fetch advice from the API
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1); // Increment the count after fetching advice
  }

  // Fetch the first piece of advice when the component mounts
  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      {/* Advice Section */}
      <div className="advice-container">
        <h5 className="advice-text">{advice}</h5>
        <button className="advice-button" onClick={getAdvice}>
          Get Advice
        </button>
        <Message count={count} />
      </div>
    </div>
  );
}

// Message component for displaying the advice count
function Message({ count }) {
  return (
    <p className="message-text">
      You have read <strong>{count}</strong> pieces of advice.
    </p>
  );
}

export default StudyComponent;
