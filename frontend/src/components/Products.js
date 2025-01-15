import axios from "axios";
import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);


  // Fetch products from the API
  useEffect(() => {
    axios
    .get("http://localhost:8000/api/data", {
      withCredentials: true, // Send cookies for CSRF
    })
    .then((response) => {
      setProducts(response.data); // Ensure the response matches your backend's structure
      setFilteredProducts(response.data);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
}, []);

  // Handle search input changes
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = products.filter(
      (product) =>
        product.nama_produk.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  

  // Add new product
  const handleAddProduct = (newProduct) => {
    axios
    .post("http://localhost:8000/api/data", newProduct, {
      headers: {
        Accept: "application/json",
        "X-XSRF-TOKEN": 'eyJpdiI6ImFmNFV6Z01PS1lDTFJGdC8wTlRXV0E9PSIsInZhbHVlIjoiQ2JJMXBrNmlXV2RFZmRhcjdDdDZFcGFrUjJEZjVBVi92aDZPT1c1TER6WWRicU84cGMwb20zbUN6dFVNRXM4SmlJM2paVkFLTmdTaVhQYnpnZk1MNTFtNUsxemRmeElIK3dPS3RoSVpYMVFsdmNORVlUVHlqWTR3N3k3Tk5zcWoiLCJtYWMiOiIwZDk0ZDQ1ODJhMThmYThmMjI3YjE4MmE2M2FhNTZkMTY3MDJkMjk3YjkxMDlkN2Q5ZjU2MzE5ZjRhOTEzZjRhIiwidGFnIjoiIn0%3D',  // Include CSRF token in the header
      },
      withCredentials: true,  // Ensure cookies are sent with the request
    })
    .then((response) => {
      setProducts((prevProducts) => [...prevProducts, response.data.data]);
      setFilteredProducts((prevProducts) => [...prevProducts, response.data.data]);
    })
    .catch((error) => {
      console.error("Error Adding Some Product", error);
    });

  setShowForm(false);
};
  
  // Toggle form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  // Form component to add a new product
  const AddProductForm = ({ onAddProduct, closeForm }) => {
    const [newProduct, setNewProduct] = useState({
      nama_produk: "",
      category: "",
      harga: 0,
      image_path: "",
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      if (
        newProduct.nama_produk &&
        newProduct.category &&
        newProduct.harga > 0 &&
        newProduct.image_path
      ) {
        onAddProduct(newProduct);
      } else {
        alert("Please fill out all fields correctly.");
      }
    };

    return (
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "400px",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.nama_produk}
          onChange={(e) =>
            setNewProduct({ ...newProduct, nama_produk: e.target.value })
          }
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}
        />
        <input
          type="text"
          placeholder="Category"
          value={newProduct.category}
          onChange={(e) =>
            setNewProduct({ ...newProduct, category: e.target.value })
          }
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.harga}
          onChange={(e) =>
            setNewProduct({ ...newProduct, harga: parseFloat(e.target.value) })
          }
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}
        />
        <input
          type="text"
          placeholder="Image Path"
          value={newProduct.image_path}
          onChange={(e) =>
            setNewProduct({ ...newProduct, image_path: e.target.value })
          }
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ddd" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Product
        </button>
        <button
          type="button"
          onClick={closeForm}
          style={{
            padding: "10px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Cancel
        </button>
      </form>
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ margin: 0 }}>Our Products</h1>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search products or categories..."
          style={{
            padding: "10px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ddd",
            fontSize: "1em",
          }}
        />
      </div>

      <button
        onClick={toggleForm}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          marginBottom: "20px",
          cursor: "pointer",
        }}
      >
        Add Product
      </button>

      {showForm && (
        <AddProductForm onAddProduct={handleAddProduct} closeForm={toggleForm} />
      )}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              width: "200px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={product.image_path}
              alt={product.nama_produk}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            />
            <h3>{product.nama_produk}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.harga}</p>
            <button
              style={{
                marginTop: "10px",
                padding: "8px 16px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => alert(`${product.nama_produk} added to cart!`)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
