import React, { useEffect } from "react";
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

    gsap.set(".circle", { yPercent: -5 });
    gsap.set(".dotsBlue", { yPercent: 10 });
    gsap.set(".owlHorned", { yPercent: -20 });
    gsap.set(".clusterGreat", { yPercent: 5 });

    gsap.to(".circle", {
      yPercent: 5,
      ease: "none",
      scrollTrigger: {
        trigger: ".clusterGreat",
        scrub: 1,
      },
    });

    gsap.to(".dotsBlue", {
      yPercent: -10,
      //ease: "none",
      //rotation: 100,
      scrollTrigger: {
        trigger: ".clusterGreat",
        scrub: 1,
      },
    });

    gsap.to(".owlHorned", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: ".clusterGreat",
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
    const SplitGreat = new SplitText(".titleGreathorned", {
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
        duration: 0.8,
        //opacity: 0,
        y: 10,
        ease: "circ.out",
        stagger: 0.02,
      },
      "+=0"
    );

    /* --- Split the text, Burrowing Owl --- */
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
    );

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
          <span>The great horned owl</span> also known as the tiger owl or the
          hoot owl, is a large owl native to the Americas.
        </div>
      </section>

      <section className="cluster clusterGreat">
        <div className="circle clusterPieces">
          <img
            src="https://www.vec.ca/wp-content/uploads/2019/03/English-Language-Level-System.jpg"
            alt=""
          />
        </div>

        <div className="owlHorned clusterPieces">
          <img
            /*src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/great_horned_owl.jpg"*/
            src="https://live.staticflickr.com/7285/8739663144_d763ebc912_b.jpg"
            alt="Great Horned Owl"
          />
          <div className="caption">
            <span>/01</span> GREAT HORNED OWL
          </div>
        </div>

        <img
          className="dotsBlue clusterPieces"
          /*src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/dots_blue_494x434.svg"*/
          src="https://www.theamericanhour.com/Storage/blogs/originals/1c%20%20Nice%20Cuppa%20Tea.jpg"
          alt="Blue Dots"
        />
      </section>

      <section>
        <div className="title titleBurrowing">
          <span>The burrowing owl</span> is a small, long-legged owl found
          throughout open landscapes of North and South America.
        </div>
      </section>

      <section className="cluster clusterBurrowing">
        <img
          className="clusterPieces triangle"
          src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/triangle_448x446.svg"
          alt="Triangle"
        />
        <div className="clusterPieces owlBurrowing">
          <img
            src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/burrrowing_owl_674x700.jpg"
            alt="Burrowing Owl"
          />
          <div className="caption captionBurrowing">
            <span>/02</span> BURROWING OWL
          </div>
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
