import React, { useEffect } from "react"; // Import React and useEffect
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import "./style.css"; // Ensure you have styles for .review, .customer-container, etc.

const ReviewContainer = () => {
  const reviews = [
    {
      id: 1,
      author: "John",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vero cupiditate officiis omnis adipisci doloribus.",
      rating: 5,
    },
    {
      id: 2,
      author: "Jane",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vero cupiditate officiis omnis adipisci doloribus.",
      rating: 5,
    },
    {
      id: 3,
      author: "Sam",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vero cupiditate officiis omnis adipisci doloribus.",
      rating: 4,
    },
  ];

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Duration of animations
      easing: "ease-in-out", // Easing function
    });
  }, []);

  return (
    <div className="review__block">
      <h3>Customer Reviews</h3>
      <div className="customer-container">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className="review"
            data-aos="fade-up"
            data-aos-delay={index * 200} // Set a delay based on the index
          >
            <h4>{review.author}</h4>
            <p>{review.text}</p>
            <p className="rating">Rating: {review.rating} / 5</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewContainer;
