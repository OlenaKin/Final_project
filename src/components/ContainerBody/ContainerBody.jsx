import React, { useEffect } from "react";
import comfort from "../../assets/comfort.jpg";
import comfortGroup from "../../assets/group-comfort.jpg";
import joy from "../../assets/joy.jpg";
import gsap from "gsap"; // Import GSAP
import "./style.css";

const ContainerBody = () => {
  useEffect(() => {
    // Access SplitText and ScrollTrigger globally if they're loaded via CDN
    const SplitText = window.SplitText;
    const ScrollTrigger = window.ScrollTrigger;

    if (!SplitText || !ScrollTrigger) {
      console.error(
        "SplitText or ScrollTrigger plugin is not available. Please make sure to include them via CDN."
      );
      return;
    }

    /* ------Great Horned Owl Sequence------  */
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin
    gsap.set(".circle", { yPercent: -5 });
    gsap.set(".dotsBlue", { yPercent: 20 });
    gsap.set(".owlHorned", { yPercent: -10 });
    gsap.set(".clusterGreat", { yPercent: 6 });

    gsap.to(".circle", {
      yPercent: 5,
      scale: 1.3,
      ease: "none",
      scrollTrigger: {
        trigger: ".clusterGreat",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    gsap.to(".dotsBlue", {
      yPercent: -5,
      scale: 1.3,
      //ease: "none",
      //rotation: 100,
      scrollTrigger: {
        trigger: ".clusterGreat",
        //start: "top center",
        //end: "bottom center",
        scrub: 1,
      },
    });

    gsap.to(".owlHorned", {
      yPercent: 22,
      scale: 1.4,
      ease: "none",
      scrollTrigger: {
        trigger: ".clusterGreat",
        start: "top center",
        end: "end center",
        scrub: 1,
      },
    });

    gsap.to(".caption", {
      yPercent: 100,
      ease: "none",
      scrollTrigger: {
        trigger: ".clusterGreat",
        end: "bottom center",
        scrub: 1,
      },
    });

    gsap.to(".clusterGreat", {
      yPercent: -5,
      ease: "none",
      scrollTrigger: {
        trigger: ".clusterGreat",
        end: "bottom center",
        scrub: 1,
      },
    });

    // Clean up function to reset animations if necessary
    return () => {
      gsap.killTweensOf(".circle");
      gsap.killTweensOf(".dotsBlue");
      gsap.killTweensOf(".owlHorned");
      gsap.killTweensOf(".caption");
      gsap.killTweensOf(".clusterGreat");
    };
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
          materials from IT sources.
        </div>
      </section>

      <section className="cluster clusterGreat">
        <div className="owlHorned clusterPieces">
          <img
            /*src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/great_horned_owl.jpg"*/
            src={comfort}
            alt="Great Horned Owl"
          />
        </div>

        <img
          className="dotsBlue clusterPieces"
          /*src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/dots_blue_494x434.svg"*/
          src={comfortGroup}
          alt="Blue Dots"
        />

        <div className="circle clusterPieces">
          <img
            /*src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/great_horned_owl.jpg"*/
            src={joy}
            alt="Great Horned Owl"
          />
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
          new level with professionals in your team.
        </div>
      </section>
    </div>
  );
};

export default ContainerBody;
