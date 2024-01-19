import React, { useState } from "react";
import productData from "../products.json";
import { Link } from "react-router-dom";
import SelectedCategory from "../components/SelectedCategory";

function Banner() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setfilteredProducts] = useState(productData);

  //   search functionalty
  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    setSearchInput(searchTerm);

    //filtering product on based search
    const filtered = productData.filter((product) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setfilteredProducts(filtered);
    console.log(filtered);
  };

  const title = (
    <h2>
      Search your one from <span>Thousand</span> Product
    </h2>
  );
  const desc = "we have the largest collection of products";
  const bannerList = [
    {
      iconName: "icofont-users-alt-4",
      text: "1.5 Million Customers",
    },
    {
      iconName: "icofont-notification",
      text: "More then 2000 Marchent",
    },
    {
      iconName: "icofont-globe",
      text: "Buy Anything Online",
    },
  ];
  //   console.log(productData);
  return (
    <>
      <div className="banner-section style-4">
        <div className="banner-content">
          {title}
          <form>
            <SelectedCategory select={"all"} />
            <input
              type="text"
              name="search"
              id="search"
              value={searchInput}
              onChange={handleSearch}
              placeholder="Search your product"
            />
            <button type="submit">
              <i class="icofont-ui-search text-warning fs-3"></i>
            </button>
          </form>
          <p>{desc}</p>
          <ul className="lab-ul">
            {searchInput &&
              filteredProducts.map((product, i) => {
                return (
                  <li key={i}>
                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Banner;
