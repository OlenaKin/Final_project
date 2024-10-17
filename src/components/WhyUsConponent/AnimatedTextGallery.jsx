import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css"; // Create a CSS file to style your elements

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const AnimatedTextGallery = () => {
  // Create refs for each section
  const orangeRef = useRef(null);
  const purpleRef = useRef(null);
  const yoyoRef = useRef(null);

  useEffect(() => {
    // Set default toggle actions for all ScrollTriggers
    ScrollTrigger.defaults({
      toggleActions: "restart pause resume pause",
    });

    // GSAP animation for the orange section
    gsap.to(orangeRef.current.querySelector("p"), {
      scrollTrigger: orangeRef.current, // Attach ScrollTrigger to the orange section
      duration: 1,
      delay: 1,
      rotation: 360,
    });

    // GSAP animation for the purple section with custom ScrollTrigger options
    gsap.to(purpleRef.current, {
      scrollTrigger: {
        trigger: purpleRef.current, // Attach ScrollTrigger to the purple section
        toggleActions: "restart pause reverse pause",
      },
      duration: 2,
      backgroundColor: "#FFAF45",
      ease: "none",
    });

    // GSAP animation for the yoyo section with yoyo effect and repeat
    gsap.to(yoyoRef.current.querySelector("p"), {
      scrollTrigger: yoyoRef.current, // Attach ScrollTrigger to the yoyo section
      scale: 1.4,
      yoyo: true,
      once: true,
      duration: 2.5,
      delay: 1,
      ease: "power2",
    });
  }, []);

  return (
    <div className="container">
      <h3>Why choose us?</h3>
      <div className="section orange" ref={orangeRef}>
        <p>Custumised approach</p>
      </div>
      <div className="section purple" ref={purpleRef}>
        <p>Talk 60-70% of the time</p>
      </div>
      <div className="section yoyo" ref={yoyoRef}>
        <p>Study flexibly with focus on your needs</p>
      </div>
    </div>
  );
};

export default AnimatedTextGallery;
