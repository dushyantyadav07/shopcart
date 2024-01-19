import React, { useState } from "react";
import { Link } from "react-router-dom";
const desc =
  "These product pointed  shoes will make you look bewitching and show off your sense of adventure. They will make you look taller and give you an attractive look that is both feminine and beautiful.";
function ProductDisplay({ item }) {
  const { name, id, price, seller, ratingCount, quantity, img } = item;
  const [prequantity, setQuantity] = useState(quantity);
  const [coupen, setCoupen] = useState("");
  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select Color");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleDecrease = () => {
    if (prequantity > 1) {
      setQuantity(prequantity - 1);
    }
  };
  const handleIncrease = () => {
    if (prequantity < 10) {
      setQuantity(prequantity + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      id: id,
      img: img,
      name: name,
      price: price,
      quantity: prequantity,
      size: size,
      color: color,
      coupen: coupen,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === id
    );

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += prequantity;
    } else {
      existingCart.push(product);
    }

    // update local storage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // reset form details
    setQuantity(1);
    setSize("Select Size");
    setColor("Select Color");
    setCoupen("");
  };
  return (
    <>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span>{ratingCount}</span>
        </p>

        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>

      {/* Cart component */}
      <div>
        <form onSubmit={handleSubmit}>
          <div className="select-product size">
            <select value={size} onChange={handleSizeChange}>
              <option>Select Size</option>
              <option value="SM">SM</option>
              <option value="MD">MD</option>
              <option value="LG">LG</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>

          <div className="select-product color">
            <select value={color} onChange={handleColorChange}>
              <option>Select Color</option>
              <option value="Pink">Pink</option>
              <option value="Ash">Ash</option>
              <option value="Red">Red</option>
              <option value="White">White</option>
              <option value="blue">blue</option>
              <option value="Red">Red</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>

          {/* cart plus minus */}
          <div className="cart-plus-minus mb-2">
            <div className="dec qtybutton rounded" onClick={handleDecrease}>
              -
            </div>
            <input
              type="text"
              className="cart-plus-minus-box "
              name="qtybutton"
              id="qtybutton"
              value={prequantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <div className="inc qtybutton rounded " onClick={handleIncrease}>
              +
            </div>
          </div>

          {/* coupen field */}
          <div className="discount-code">
            <input
              type="text"
              placeholder="Enter Discount Code"
              onChange={(e) => setCoupen(e.target.value)}
            />
          </div>
          <button type="submit" className="lab-btn">
            <span>Add to cart</span>
          </button>

          <Link to="/cart-page">
            <span className="lab-btn bg-primary text-white">Check Out </span>
          </Link>
        </form>
      </div>
    </>
  );
}

export default ProductDisplay;
