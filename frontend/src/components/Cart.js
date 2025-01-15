import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const handleCheckout = () => {
    navigate("/transaksi");
  };

  // Format Rupiah
  const formatRupiah = (value) => {
    return value.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <h4>{item.name}</h4>
              <p>Price: {formatRupiah(item.price)}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: {formatRupiah(item.price * item.quantity)}</p>
            </div>
          ))}
          <h3>Total: {formatRupiah(calculateTotal())}</h3>
        </div>
      )}
      <button
        onClick={handleCheckout}
        style={{
          padding: "12px 30px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontSize: "1.1em",
          cursor: "pointer",
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
