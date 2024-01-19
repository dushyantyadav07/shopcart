import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";

function ProductCard({ GridList, Products }) {
  return (
    <div
      className={`shop-product-wrap row justify-content-center ${
        GridList ? "grid" : "list"
      }`}
    >
      {Products.map((item, i) => (
        <div key={i} className="col-lg-4 col-md-6 col-12">
          <div className="product-item">
            {/* priduct img */}
            <div className="product-thumb">
              <div className="pro-thumb">
                <img src={item.img} alt="" />
              </div>
              <div className="product-action-link">
                <Link to={`/shop/${item.id}`}>
                  <i className="icofont-eye"></i>
                </Link>
                <a href="#">
                  <i className="icofont-heart"></i>
                </a>
                <Link to="/cart-page">
                  <i className="icofont-cart-alt"></i>
                </Link>
              </div>
            </div>

            {/* product-contents */}
            <div className="product-content">
              <h5>
                <Link to={`/shop/${item.id}`}>{item.name}</Link>
              </h5>
              <p>
                <Rating />
              </p>
              <h6> ${item.price}</h6>
            </div>
          </div>

          {/* list style */}
          <div className="product-list-item">
            {/* priduct img */}
            <div className="product-thumb">
              <div className="pro-thumb">
                <img src={item.img} alt="" />
              </div>
              <div className="product-action-link">
                <Link to={`/shop/${item.id}`}>
                  <i className="icofont-eye"></i>
                </Link>
                <a href="#">
                  <i className="icofont-heart"></i>
                </a>
                <Link to="/cart-page">
                  <i className="icofont-cart-alt"></i>
                </Link>
              </div>
            </div>

            {/* product-contents */}
            <div className="product-content">
              <h5>
                <Link to={`/shop/${item.id}`}>{item.name}</Link>
              </h5>
              <p>
                <Rating />
              </p>
              <h6> ${item.price}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
