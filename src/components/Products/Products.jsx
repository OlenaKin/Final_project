import React, { useEffect } from "react"; // Import React and useEffect
import { Link } from "react-router-dom";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css";
import "./style.css"; // Import CSS for styling

const products = [
  {
    id: 1,
    name: "Single individual lesson",

    description:
      "Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi sunt, suscipit, ad, eum tempora magnam obcaecati dolore repellendus architecto saepe est autem similique nobis quae in harum dolorem ratione voluptate.",
    price: "700.00UA",
  },
  {
    id: 2,
    name: "Single sprint (group)",
    description:
      "Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi sunt, suscipit, ad, eum tempora magnam obcaecati dolore repellendus architecto saepe est autem similique nobis quae in harum dolorem ratione voluptate.",
    price: "700.00UA",
  },
  {
    id: 3,
    name: "Double sprint (group)",
    description:
      "Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi sunt, suscipit, ad, eum tempora magnam obcaecati dolore repellendus architecto saepe est autem similique nobis quae in harum dolorem ratione voluptate.",
    price: "700.00UA",
  },
  {
    id: 4,
    name: "Single sprint (individual)",
    description:
      "Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi sunt, suscipit, ad, eum tempora magnam obcaecati dolore repellendus architecto saepe est autem similique nobis quae in harum dolorem ratione voluptate.",
    price: "700.00UA",
  },
];

const ProductDisplay = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 2000, // Duration of the animation
      easing: "ease-in-out", // Easing function
    });
  }, []);

  return (
    <div className="product-container">
      <h2>Choose your English</h2>
      <div className="products">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="product-card"
            data-aos="flip-up"
            data-aos-delay={index * 200}
          >
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h4>{product.price}</h4>
            <Link to="/contact">
              <button>Contact Us</button>
            </Link>
          </div>
        ))}
      </div>
      <button className="testingButton">Записатись на тестування</button>
    </div>
  );
};

export default ProductDisplay;
