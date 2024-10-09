import React, { useEffect } from "react";
import lap from "../../assets/lap.png";
import interview from "../../assets/interview.jpg";
import comfort from "../../assets/comfort.jpg";
import comfortGroup from "../../assets/group-comfort.jpg";
import joy from "../../assets/joy.jpg";
import gsap from "gsap"; // Import GSAP
import "./style.css"; // Make sure to create a CSS file for styles

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
    //gsap.set(".circle", { yPercent: -5 });
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

    /* ------Burrowing Owl Sequence------  */
    gsap.set(".triangle", { yPercent: 25, rotation: -90 });
    gsap.set(".dotsWhite", { yPercent: 10 });
    gsap.set(".owlBurrowing", { yPercent: -20 });
    gsap.set(".clusterBurrowing", { yPercent: 5 });

    gsap.to(".triangle", {
      yPercent: -5,
      rotation: 40,
      ease: "none",
      scrollTrigger: {
        trigger: ".clusterBurrowing",
        scrub: 1,
      },
    });

    gsap.to(".dotsWhite", {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: ".clusterBurrowing",
        scrub: 1,
      },
    });

    gsap.to(".owlBurrowing", {
      yPercent: 20,
      scale: 1.3,
      ease: "none",
      scrollTrigger: {
        trigger: ".clusterBurrowing",
        scrub: 1,
      },
    });

    gsap.to(".captionBurrowing", {
      yPercent: 200,
      ease: "none",
      scrollTrigger: {
        trigger: ".clusterBurrowing",
        end: "bottom center",
        scrub: 1,
      },
    });

    gsap.to(".clusterBurrowing", {
      yPercent: -5,
      ease: "none",
      scrollTrigger: {
        trigger: ".clusterBurrowing",
        end: "bottom center",
        scrub: 1,
      },
    });

    /* --- Split the text, Great Horned Owl --- */
    /*const SplitGreat = new SplitText(".titleGreathorned", {
      type: "words,chars",
    });
    const chars = SplitGreat.chars;

    const tlSplitGreat = gsap.timeline({
      onComplete: () => {
        SplitGreat.revert(); // Revert back to original text after animation
      },
    });

    tlSplitGreat.from(
      chars,
      {
        duration: 0.1,
        //opacity: 0,
        y: 10,
        ease: "circ.out",
        stagger: 0.02,
      },
      "+=0"
    );

    
    const SplitBurrowing = new SplitText(".titleBurrowing", {
      type: "words,chars",
    });
    const charsBurrowing = SplitBurrowing.chars;

    const tlSplitBurrowing = gsap.timeline();
    tlSplitBurrowing.from(
      charsBurrowing,
      {
        duration: 0.8,
        //opacity: 0,
        y: 10,
        ease: "circ.out",
        stagger: 0.02,
        scrollTrigger: {
          trigger: ".titleBurrowing",
          start: "top 75%",
          end: "bottom center",
          scrub: 1,
        },
      },
      "+=0"
    );*/

    // Clean up function to reset animations if necessary
    return () => {
      gsap.killTweensOf(".circle");
      gsap.killTweensOf(".dotsBlue");
      gsap.killTweensOf(".owlHorned");
      gsap.killTweensOf(".caption");
      gsap.killTweensOf(".clusterGreat");
      gsap.killTweensOf(".triangle");
      gsap.killTweensOf(".dotsWhite");
      gsap.killTweensOf(".owlBurrowing");
      gsap.killTweensOf(".captionBurrowing");
      gsap.killTweensOf(".clusterBurrowing");
    };
  }, []);

  return (
    <div>
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

      <section className="cluster clusterBurrowing">
        <img
          className="clusterPieces triangle"
          /*src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/triangle_448x446.svg"*/
          src={lap}
          alt="Triangle"
        />
        <div className="clusterPieces owlBurrowing">
          <img
            /*src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/burrrowing_owl_674x700.jpg"*/
            src={interview}
            alt="Burrowing Owl"
          />
        </div>

        <img
          className="clusterPieces dotsWhite"
          src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/dots_white_310x588.svg"
          alt="White Dots"
        />
      </section>

      <section className="spcr300"></section>
    </div>
  );
};

export default ContainerBody;
