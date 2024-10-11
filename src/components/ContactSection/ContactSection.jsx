import React, { useEffect } from "react";
import AOS from "aos";
//import "aos/dist/aos.css"; // Import the AOS styles
import "./style.css"; // Your custom styles

function ContactSection() {
  // Initialize AOS once when the component mounts
  useEffect(() => {
    AOS.init({
      once: true, // Ensure animations happen only once
      duration: 1200, // Default animation duration (overrides individual settings)
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section>
      <div className="bottom-block">
        <div className="map-block" id="contacts">
          {/* Contact Container*/}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.770025990577!2d-73.99519342546638!3d40.74508563559191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a51219a483%3A0x5eeaaef98e19e487!2sDevon%20Nola%20Great%20Lengths%20Hair%20Extensions%20NYC!5e0!3m2!1suk!2sat!4v1724400915300!5m2!1suk!2sat"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
          <div className="main__contact-container ">
            <h5>Reach Out:</h5>

            {/* Contact Form*/}
            <div className="form">
              <form id="contact-form" className="contact-form">
                <input type="text" id="name" placeholder="Full name" required />
                <input type="email" id="email" placeholder="Email" required />
                <textarea
                  id="question"
                  name="question"
                  placeholder="Type your question here"
                  className="form-textarea"
                ></textarea>
                <button className="bottom-block__submit-button" type="submit">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
