import React, { useEffect } from "react";
import comfort from "../../assets/comfort.jpg";
import comfortGroup from "../../assets/group-comfort.jpg";
import joy from "../../assets/joy.jpg";
import AOS from "aos";
import "./style.css";

const ContainerBody = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Duration of animations
      easing: "ease-in-out", // Easing function
    });
  }, []);

  return (
    <div className="gsapContainer">
      <section>
        <div className="title titleGreathorned">
          <span>English for IT</span> is not just important, but necessary,
          because all technical documentation for the software is in English;
          most domestic companies cooperate with foreign partners and often, if
          not daily, use English. Therefore, for any IT company, English is an
          opportunity to reach a new level with professionals in your team.
          English for Information Technology is an advanced, multi-level course
          for IT professionals created by Empire methodologies using authentic
          materials from IT sources. Therefore, for any IT company, English is
          an opportunity to reach a new level with professionals in your team.
          English for Information Technology is an advanced, multi-level course
          for IT professionals created by Empire methodologies using authentic
          materials from IT sources.Therefore, for any IT company, English is an
          opportunity to reach a new level with professionals in your team.
          English for Information Technology is an advanced, multi-level course
          for IT professionals created by Empire methodologies using authentic
          materials from IT sources.
        </div>
      </section>

      <section className="cluster clusterGreat">
        <div className="owlHorned clusterPieces" data-aos="fade-up-left">
          <img src={comfort} alt="Great Horned Owl" />
        </div>

        <div data-aos="fade-up-right">
          <img
            className="dotsBlue clusterPieces"
            src={comfortGroup}
            alt="Blue Dots"
          />
        </div>

        <div className="circle clusterPieces" data-aos="fade-up">
          <img src={joy} alt="Great Horned Owl" />
        </div>
      </section>

      <section>
        <div className="title titleBurrowing">
          <span>English for Information Technology</span> is an advanced,
          multi-level course for IT professionals created by Empire
          methodologies using authentic materials from IT sources. English for
          IT is not just important, but necessary, because all technical
          documentation for the software is in English; most domestic companies
          cooperate with foreign partners and often, if not daily, use English.
          Therefore, for any IT company, English is an opportunity to reach a
          new level with professionals in your team. Therefore, for any IT
          company, English is an opportunity to reach a new level with
          professionals in your team. English for Information Technology is an
          advanced, multi-level course for IT professionals created by Empire
          methodologies using authentic materials from IT sources.Therefore, for
          any IT company, English is an opportunity to reach a new level with
          professionals in your team. English for Information Technology is an
          advanced, multi-level course for IT professionals created by Empire
          methodologies using authentic materials from IT sources.
        </div>
      </section>
    </div>
  );
};

export default ContainerBody;
