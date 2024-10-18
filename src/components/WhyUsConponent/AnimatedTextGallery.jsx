import React, { useEffect } from "react";
import AOS from "aos";
//import "aos/dist/aos.css";
import "./style.css"; // Your custom styles

const AnimatedTextGallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      easing: "ease-in-out", // Easing function
    });
    AOS.refresh();
  }, []);

  return (
    <div className="container">
      <h3>Why choose us?</h3>
      <div className="orange section" data-aos="fade-up">
        <p data-aos="fade-right" data-aos-delay="200" data-aos-duration="1500">
          Customized approach
        </p>
      </div>
      <div className="purple section" data-aos="fade-up">
        <p>Talk 60-70% of the time</p>
      </div>
      <div
        className="yoyo section"
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        <p>Study flexibly with focus on your needs</p>
      </div>
    </div>
  );
};

export default AnimatedTextGallery;
