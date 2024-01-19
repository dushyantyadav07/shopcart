import React from "react";
import Data from "../products.json";

function ShopCategory({
  filterItem,
  setItem,
  menuItem,
  setProducts,
  selectedCategory,
}) {
  return (
    <>
      <div className="widget-header">
        <h5 className="ms-2"> All Categories</h5>
      </div>
      <div>
        <button
          className={`m-2 ${
            selectedCategory === "All" ? "bg-warning text-light rounded" : ""
          }`}
          onClick={() => setProducts(Data)}
        >
          All
        </button>
        {menuItem.map((val, id) => {
          return (
            <button
              className={`m-2 ${
                selectedCategory === "All"
                  ? "bg-secondary text-white rounded"
                  : ""
              }`}
              key={id}
              onClick={() => filterItem(val)}
            >
              {val}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default ShopCategory;
