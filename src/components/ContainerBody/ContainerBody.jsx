import React, { useEffect } from "react";
import individualTime from "../../assets/individual.jpg";
import interviewTime from "../../assets/interviewTime.jpg";
import speakingTime from "../../assets/speakingTime.jpg";
import AOS from "aos";
import "./style.css";

const ContainerBody = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Duration of animations
      easing: "ease-in-out", // Easing function
      delay: 500,
      offset: 100,
      once: true,
      throttleDelay: 99,
    });
  }, []);

  return (
    <div className="gsapContainer">
      <section>
        <div className="title titleGreathorned">
          <div className="contBody__heading">
            <span>English for IT </span> gives customised approach
          </div>
          <div className="contBody__paragraph">
            Most domestic companies cooperate with foreign partners and often,
            if not daily, use English. Therefore, for any IT company, English is
            an opportunity to reach a new level with professionals in your team.
            English for Information Technology is an advanced, multi-level
            course for IT professionals created by Empire methodologies using
            authentic materials from IT sources. Therefore, for any IT company,
            English is an opportunity to reach a new level with professionals in
            your team.
          </div>
        </div>
      </section>

      <section className="clusterGreat">
        <div className="cluster">
          <div className="owlHorned clusterPieces" data-aos="fade-left">
            <img src={speakingTime} alt="Great Horned Owl" />
          </div>

          <div className="dotsBlue clusterPieces" data-aos="zoom-in-down">
            <img src={interviewTime} alt="interview" />
          </div>

          <div className="circle clusterPieces" data-aos="fade-right">
            <img src={individualTime} alt="Great Horned Owl" />
          </div>
        </div>
      </section>

      <section>
        <div className="title titleBurrowing">
          <div className="contBody__heading">
            <span>English for IT </span> gives customised approach
          </div>
          <div className="contBody__paragraph second__paragraph">
            Most domestic companies cooperate with foreign partners and often,
            if not daily, use English. Therefore, for any IT company, English is
            an opportunity to reach a new level with professionals in your team.
            English for Information Technology is an advanced, multi-level
            course for IT professionals created by Empire methodologies using
            authentic materials from IT sources. Therefore, for any IT company,
            English is an opportunity to reach a new level with professionals in
            your team.
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContainerBody;
