import React from "react";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate("/products");
  };

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // If the product is already in the cart, increase the quantity
      cart[existingProductIndex].quantity += 1;
    } else {
      // If the product is not in the cart, add it with quantity 1
      product.quantity = 1;
      cart.push(product);
    }

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${product.name} has been added to your cart!`);
  };

  const featuredProducts = [
    {
      id: 1,
      name: "Apple",
      price: 12000, // Changed to RP
      image: "https://via.placeholder.com/150?text=Apple",
    },
    {
      id: 2,
      name: "Banana",
      price: 8000, // Changed to RP
      image: "https://via.placeholder.com/150?text=Banana",
    },
    {
      id: 3,
      name: "Orange",
      price: 15000, // Changed to RP
      image: "https://via.placeholder.com/150?text=Orange",
    },
    {
      id: 4,
      name: "Flour",
      price: 5000, // Changed to RP
      image: "https://via.placeholder.com/150?text=Flour",
    },
    {
      id: 5,
      name: "Sugar",
      price: 6000, // Changed to RP
      image: "https://via.placeholder.com/150?text=Sugar",
    },
    {
      id: 6,
      name: "Cooking Oil",
      price: 20000, // Changed to RP
      image: "https://via.placeholder.com/150?text=Cooking+Oil",
    },
    {
      id: 7,
      name: "Mango",
      price: 20000, // Changed to RP
      image: "https://via.placeholder.com/150?text=Mango",
    },
    {
      id: 8,
      name: "Pineapple",
      price: 18000, // Changed to RP
      image: "https://via.placeholder.com/150?text=Pineapple",
    },
    {
      id: 9,
      name: "Rice",
      price: 13000, // Changed to RP
      image: "https://via.placeholder.com/150?text=Rice",
    },
    {
      id: 10,
      name: "Salt",
      price: 4000, // Changed to RP
      image: "https://via.placeholder.com/150?text=Salt",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set the speed (in milliseconds) for each slide to be visible
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // For tablets and smaller screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // For mobile screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ padding: "20px" }}>
      <section
        style={{
          background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
          padding: "40px",
          textAlign: "center",
          borderRadius: "15px",
          color: "white",
          marginBottom: "30px",
        }}
      >
        <h2>Welcome to DAKO MART!</h2>
        <p>Your one-stop shop for all your daily needs.</p>
        <button
          style={{
            marginTop: "20px",
            padding: "12px 30px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "1.1em",
            cursor: "pointer",
          }}
          onClick={goToProducts}
        >
          Shop Now
        </button>
      </section>

      <section>
        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
          Featured Products
        </h3>
        <Slider {...sliderSettings}>
          {featuredProducts.map((product) => (
            <div key={product.id}>
              <div
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "10px",
                  width: "90%",
                  textAlign: "center",
                  margin: "0 auto",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                />
                <h4>{product.name}</h4>
                <p>Price: RP {product.price.toLocaleString()}</p>
                <button
                  onClick={() => addToCart(product)}
                  style={{
                    marginTop: "10px",
                    padding: "10px 20px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Home;
