/*import React, { useEffect } from "react";
import AOS from "aos";
import "./style.css"; // Your custom styles

function ContactSection() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: "ease-in-out", // Easing function
    });
    AOS.refresh(); // Refresh to apply the animations
  }, []);
  return (
    <div className="bottom-block">
      <div className="map-block" id="contacts">
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

        <div className="contact-container" data-aos="flip-left">
          <h5>Reach Out:</h5>
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
                Записатись на тестування
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;*/

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "./style.css"; // Your custom styles

function ContactSection() {
  const [name, setName] = useState(""); // State to hold the name
  const [email, setEmail] = useState(""); // State to hold the email
  const [question, setQuestion] = useState(""); // State to hold the question

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: "ease-in-out", // Easing function
    });
    AOS.refresh(); // Refresh to apply the animations
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    console.log("Name:", name); // Log the name to the console
    console.log("Email:", email); // Log the email to the console
    console.log("Question:", question); // Log the question to the console

    // Optionally clear the input fields
    setName("");
    setEmail("");
    setQuestion("");
  };

  return (
    <div className="bottom-block">
      <div className="map-block" id="contacts">
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

        <div className="contact-container" data-aos="flip-left">
          <h5>Reach Out:</h5>
          <div className="form">
            <form
              id="contact-form"
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                id="name"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)} // Update name state
                required
              />
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
                required
              />
              <textarea
                id="question"
                name="question"
                placeholder="Type your question here"
                className="form-textarea"
                value={question}
                onChange={(e) => setQuestion(e.target.value)} // Update question state
              ></textarea>
              <button className="bottom-block__submit-button" type="submit">
                Пройти тестування
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
