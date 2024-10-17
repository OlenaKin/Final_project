// src/pages/Home/Home.jsx
import React from "react";
import Hero from "../../components/Hero/Hero";
import ContainerBody from "../../components/ContainerBody";
import WhyUsComponent from "../../components/WhyUsConponent/AnimatedTextGallery";
import Connecting from "../../components/Connecting";

function Home() {
  return (
    <div>
      <Hero />
      <ContainerBody />
      <WhyUsComponent />
      <Connecting />
    </div>
  );
}

export default Home;
