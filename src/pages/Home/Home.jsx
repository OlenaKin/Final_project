// src/pages/Home/Home.jsx
import React from "react";
import Hero from "../../components/Hero/Hero";
import ContainerBody from "../../components/ContainerBody";
import ContactSection from "../../components/ContactSection/ContactSection";

function Home() {
  return (
    <div>
      <Hero />
      <ContainerBody />
      <ContactSection />
    </div>
  );
}

export default Home;
