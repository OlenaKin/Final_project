import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./style.css";

const MovingBackground = () => {
  const backgroundRef = useRef(null); // Create a ref for the background element

  useEffect(() => {
    const element = backgroundRef.current; // Get the DOM element from the ref

    // GSAP animation
    gsap.to(element, {
      duration: 2,
      x: 1000, // Move the element to the right
      //repeat: -1, // Repeat the animation indefinitely
      yoyo: true, // Reverse the animation when it reaches the end
    });
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="moving-background" ref={backgroundRef}>
      {/* Your content here */}
      <h1>Hello, I'm a moving background!</h1>
    </div>
  );
};

export default MovingBackground;
