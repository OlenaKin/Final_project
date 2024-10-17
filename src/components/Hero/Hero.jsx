import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import groups from "../../assets/groups.jpg";
import speaking from "../../assets/speaking.jpg";
import individual from "../../assets/individual.jpg";
import { Link } from "react-router-dom"; // Import Link
import "./style.css"; // Add this to style the Hero component

const Hero = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: false,
  };

  // const title = "Online English school for IT-specialists";

  return (
    <section className="hero__section">
      <div className="hero" id="about_us">
        {/*<Slider {...settings} className="hero__text-slider slick-container">
          <div className="hero__text-slider">
            {/*first slide}
            <div className="main__mySlides">
              <div className="hero__text-block">
                <h2>To this...</h2>
                <h3>Confident, sharp, smart</h3>
              </div>
              <div className="hero__photo-block">
                <img src={unsure} alt="unsure" />
              </div>
            </div>
            {/*second slide}
            <div className="main__mySlides">
              <div className="hero__text-block">
                <h2>To this...</h2>
                <h3>Confident, sharp, smart</h3>
              </div>
              <div className="hero__photo-block">
                <img src={unsure} alt="unsure" />
              </div>
            </div>
            {/*third slide}
            <div className="main__mySlides">
              <div className="hero__text-block">
                <h2>And this...</h2>
                <h3>Able, strong, dominant</h3>
              </div>
              <div className="hero__photo-block">
                <img src={unsure} alt="unsure" />
              </div>
            </div>
          </div>
        </Slider>*/}
        {/* <h1>{title}</h1> */}
        <Slider {...settings} className="hero__text-slider slick-container">
          {/* first slide */}
          <div className="hero__mySlides">
            <div className="hero__text-block">
              <h2>Group lessons</h2>

              <h3>
                <span>BOOST</span> your confidence
              </h3>
              <p>
                Our qualified teachers help students to overcome "freezing mode"
                and speak freely. Our qualified teachers help students to
                overcome "freezing mode" and speak freely. Our qualified
                teachers help students to overcome "freezing mode" and speak
                freely.
              </p>
              <Link to="/study">
                <button className="seeDetails">See details</button>
              </Link>
            </div>
            <div className="hero__photo-block">
              <img src={groups} alt="groups" />
            </div>
          </div>
          {/* second slide */}
          <div className="hero__mySlides">
            <div className="hero__text-block">
              <h2>Individual lessons</h2>
              <h3>
                <span>BUILD UP</span> speaking skills
              </h3>
              <p>
                Our qualified teachers help students to overcome "freezing mode"
                and speak freely. Our qualified teachers help students to
                overcome "freezing mode" and speak freely. Our qualified
                teachers help students to overcome "freezing mode" and speak
                freely.
              </p>
              <Link to="/study">
                <button className="seeDetails">See details</button>
              </Link>
            </div>

            <div className="hero__photo-block">
              <img src={individual} alt="individual" />
            </div>
          </div>

          {/* third slide */}
          <div className="hero__mySlides">
            <div className="hero__text-block">
              <h2>Speaking clubs</h2>
              <h3>
                <span>BROADEN</span> your horizonts
              </h3>
              <p>
                Our qualified teachers help students to overcome "freezing mode"
                and speak freely. Our qualified teachers help students to
                overcome "freezing mode" and speak freely. Our qualified
                teachers help students to overcome "freezing mode" and speak
                freely.
              </p>
              <Link to="/study">
                <button className="seeDetails">See details</button>
              </Link>
            </div>
            <div className="hero__photo-block">
              <img src={speaking} alt="speaking" />
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Hero;