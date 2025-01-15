import React from "react";

function About() {
  const containerStyle = {
    padding: "40px",
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)", // Gradient background
    borderRadius: "10px", // Optional: round the corners
  };

  const sectionStyle = {
    marginBottom: "20px",
  };

  const titleStyle = {
    fontSize: "2em",
    color: "#333",
  };

  const subtitleStyle = {
    fontSize: "1.5em",
    color: "#555",
  };

  const textStyle = {
    fontSize: "1.1em",
    lineHeight: "1.6",
    color: "#444",
  };

  const listStyle = {
    listStyleType: "none",
    paddingLeft: 0,
  };

  const listItemStyle = {
    fontSize: "1.1em",
    margin: "5px 0",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>About Us</h1>

      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>Our Story</h2>
        <p style={textStyle}>
          DAKO MART is a leading supermarket in Indonesia, committed to offering
          high-quality products at affordable prices. Established in 2021, we
          aim to provide a one-stop shopping experience with a wide range of
          fresh produce, groceries, and household essentials. Our mission is to
          make shopping convenient, affordable, and enjoyable for all our
          customers.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>Our Mission</h2>
        <p style={textStyle}>
          Our mission is to bring the best shopping experience to our customers
          by providing top-quality products, excellent customer service, and an
          easy-to-navigate shopping platform. We aim to become a trusted and
          reliable supermarket for families, offering everything you need in one
          place.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={subtitleStyle}>Our Values</h2>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            Customer Satisfaction: We always put our customers first.
          </li>
          <li style={listItemStyle}>
            Quality Products: We source the best products from trusted
            suppliers.
          </li>
          <li style={listItemStyle}>
            Innovation: We embrace technology to improve the shopping
            experience.
          </li>
          <li style={listItemStyle}>
            Community: We aim to support and contribute to local communities.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;
