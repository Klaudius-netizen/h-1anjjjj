import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Function to format numbers as Rupiah (Rp)
const formatRupiah = (number) => {
  return number.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
};

const Transaksi = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [paymentMethod, setPaymentMethod] = useState("creditCard"); // Default payment method
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // If cart is empty, redirect to the cart page
    if (cartItems.length === 0) {
      navigate("/cart");
    }
  }, [cartItems, navigate]);

  // Function to calculate the total price
  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(0); // Fixed decimal places to avoid fractional rupiah
  };

  // Handle the payment action
  const handlePayment = () => {
    // Simulate successful payment processing
    setIsSuccess(true);
    setSuccessMessage("Pembayaran Anda telah berhasil!");
    // Clear the cart after successful payment
    localStorage.removeItem("cart");
    setCartItems([]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Halaman Pembayaran</h2>

      {/* Display success message after successful payment */}
      {isSuccess && successMessage && (
        <div
          style={{
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            marginBottom: "20px",
          }}
        >
          {successMessage}
        </div>
      )}

      {/* Display cart items */}
      <div
        style={{
          marginBottom: "20px",
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          border: "1px solid #ddd",
        }}
      >
        <h3>Detail Pesanan</h3>
        {cartItems.length === 0 ? (
          <p>Keranjang Anda kosong.</p>
        ) : (
          <ul style={{ listStyleType: "none", padding: "0" }}>
            {cartItems.map((item, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "10px",
                  border: "1px solid #ddd",
                  padding: "10px",
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    marginRight: "15px",
                    borderRadius: "5px",
                  }}
                />
                <span style={{ fontWeight: "bold" }}>{item.name}</span>
                <p>Price: {formatRupiah(item.price)}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: {formatRupiah(item.price * item.quantity)}</p>
              </li>
            ))}
          </ul>
        )}
        <h3>Total Harga: {formatRupiah(calculateTotal())}</h3>
      </div>

      {/* Payment method selection */}
      <div
        style={{
          marginBottom: "20px",
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          border: "1px solid #ddd",
        }}
      >
        <h3>Pilih Metode Pembayaran</h3>
        <div>
          <input
            type="radio"
            id="creditCard"
            name="paymentMethod"
            value="creditCard"
            checked={paymentMethod === "creditCard"}
            onChange={() => setPaymentMethod("creditCard")}
          />
          <label htmlFor="creditCard" style={{ marginLeft: "10px" }}>
            Kartu Kredit
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="paypal"
            name="paymentMethod"
            value="paypal"
            checked={paymentMethod === "paypal"}
            onChange={() => setPaymentMethod("paypal")}
          />
          <label htmlFor="paypal" style={{ marginLeft: "10px" }}>
            PayPal
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="bankTransfer"
            name="paymentMethod"
            value="bankTransfer"
            checked={paymentMethod === "bankTransfer"}
            onChange={() => setPaymentMethod("bankTransfer")}
          />
          <label htmlFor="bankTransfer" style={{ marginLeft: "10px" }}>
            Transfer Bank
          </label>
        </div>
      </div>

      {/* Confirm payment button outside the order details */}
      <div>
        <button
          onClick={handlePayment}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Bayar Sekarang
        </button>
      </div>
    </div>
  );
};

export default Transaksi;
