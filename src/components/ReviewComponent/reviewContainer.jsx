// import React, { useEffect } from "react"; // Import React and useEffect
// import AOS from "aos"; // Import AOS
// import "aos/dist/aos.css"; // Import AOS styles
// import "./style.css"; // Ensure you have styles for .review, .customer-container, etc.

// const ReviewContainer = () => {
//   const reviews = [
//     {
//       id: 1,
//       author: "John",
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vero cupiditate officiis omnis adipisci doloribus.",
//       rating: 5,
//     },
//     {
//       id: 2,
//       author: "Jane",
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vero cupiditate officiis omnis adipisci doloribus.",
//       rating: 5,
//     },
//     {
//       id: 3,
//       author: "Sam",
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vero cupiditate officiis omnis adipisci doloribus.",
//       rating: 4,
//     },
//   ];

//   useEffect(() => {
//     // Initialize AOS
//     AOS.init({
//       duration: 1000, // Duration of animations
//       easing: "ease-in-out", // Easing function
//     });
//   }, []);

//   return (
//     <div className="review__block">
//       <h3>Customer Reviews</h3>
//        <div className="row align-items-stretch">
//         {reviews.map((review, index) => (
//           <div className="col-md-4" key={review.id}>
//             <div
//               className="card h-100"
//               data-aos="fade-up"
//               data-aos-delay={index * 200}
//             >
//               <div className="card-body">
//                 <h4 className="card-title">{review.author}</h4>
//                 <p className="card-text">{review.text}</p>
//                 <p className="rating">Rating: {review.rating} / 5</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>

//   );
// };

// export default ReviewContainer;

// import React, { useEffect } from "react"; // Import React and useEffect
// import AOS from "aos"; // Import AOS
// import "aos/dist/aos.css"; // Import AOS styles
// import "./style.css"; // Ensure you have styles for .review, .customer-container, etc.

// const ReviewContainer = () => {
//   const reviews = [
//     {
//       id: 1,
//       author: "John",
//       text: "Welcome to Apex! Now the site is running and open, we expect profiles to be done. There is a template you can fill in, instead of creating your own.",
//       rating: 5,
//       img: "https://i.imgur.com/ctvpjSP.png",
//     },
//     {
//       id: 2,
//       author: "Jane",
//       text: "Humans have been surviving against the animals ever since the first outbreak. Yet a cure has been found, and worked upon domestic dogs.",
//       rating: 5,
//       img: "https://i.imgur.com/hZFrbJJ.jpg",
//     },
//     {
//       id: 3,
//       author: "Sam",
//       text: "Moles have been getting into the underground system. Some areas are closed off due to weak or broken framework.",
//       rating: 4,
//       img: "https://i.imgur.com/e5TBLka.jpg",
//     },
//   ];

//   useEffect(() => {
//     // Initialize AOS
//     AOS.init({
//       duration: 1000, // Duration of animations
//       easing: "ease-in-out", // Easing function
//     });
//   }, []);

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-8 col-md-offset-2">
//           <div className="tcb-quote-carousel">
//             <div
//               className="carousel slide carousel-fade"
//               id="fade-quote-carousel"
//               data-ride="carousel"
//               data-interval="3000"
//             >
//               {/* Remove or comment out the Carousel indicators */}
//               {/* <ol className="carousel-indicators">
//                 {reviews.map((review, index) => (
//                   <li
//                     key={review.id}
//                     data-target="#fade-quote-carousel"
//                     data-slide-to={index}
//                     className={index === 0 ? "active" : ""}
//                   />
//                 ))}
//               </ol> */}
//               {/* Carousel items */}
//               <div className="carousel-inner">
//                 {reviews.map((review, index) => (
//                   <div
//                     key={review.id}
//                     className={`item ${index === 0 ? "active" : ""}`}
//                     data-aos="fade-up"
//                     data-aos-delay={index * 200}
//                   >
//                     <div className="profile-circle">
//                       <img
//                         className="img-responsive"
//                         src={review.img}
//                         alt={review.author}
//                       />
//                     </div>
//                     <blockquote>
//                       <p>{review.text}</p>
//                     </blockquote>
//                     <p className="rating">Rating: {review.rating} / 5</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <br />
//     </div>
//   );
// };

// export default ReviewContainer;

import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import imageFace from "../../assets/emoji-grin.svg";
import Slider from "react-slick";
import "./style.css"; // Ensure you have styles for .review, .customer-container, etc.

const ReviewContainer = () => {
  const reviews = [
    {
      id: 1,
      author: "John",
      text: "Welcome to Apex! Now the site is running and open, we expect profiles to be done. There is a template you can fill in, instead of creating your own.",
      rating: 5,
      img: imageFace,
    },
    {
      id: 2,
      author: "Jane",
      text: "Humans have been surviving against the animals ever since the first outbreak. Yet a cure has been found, and worked upon domestic dogs.",
      rating: 5,
      img: imageFace,
    },
    {
      id: 3,
      author: "Sam",
      text: "Moles have been getting into the underground system. Some areas are closed off due to weak or broken framework.",
      rating: 4,
      img: imageFace,
    },
  ];

  //   useEffect(() => {
  //     // Initialize AOS
  //     AOS.init({
  //       duration: 1000,
  //       easing: "ease-in-out",
  //     });
  //   }, []);

  // Slick Slider settings
  const settings = {
    dots: true, // Enable dots (pagination)
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one review at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Automatically slide
    autoplaySpeed: 3000, // Slide every 3 seconds
    arrows: false, // Disable navigation arrows
  };

  return (
    <div className="review__container">
      <h3>Our reviews</h3>
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className="review-slide"
                // data-aos="flip-up"
                // data-aos-delay={index * 200}
              >
                <div className="profile-circle">
                  <img
                    className="img-responsive"
                    src={review.img}
                    alt={review.author}
                  />
                </div>
                <blockquote>
                  <p>{review.text}</p>
                </blockquote>
                <p className="rating">Rating: {review.rating} / 5</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <br />
    </div>
  );
};

export default ReviewContainer;
