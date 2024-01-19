import React, { useState } from "react";
import PageHeader from "./PageHeader";
import Data from "../products.json";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import Search from "./Search";
import ShopCategory from "./ShopCategory";
import { setItem } from "localforage";
import PopularPost from "./PopularPost";
import Tags from "./Tags";

const showResult = "Showing 01 - 12 of 139 Results";
function Shop() {
  const [GridList, setGridList] = useState(true);
  const [product, setProduct] = useState(Data);

  //   paginate
  const [currentPage, setCurrentPage] = useState(1);
  const productperPage = 12;
  const indexOfLastProduct = currentPage * productperPage;
  const indexOfFirstProduct = indexOfLastProduct - productperPage;

  const currentProducts = product.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // function for change current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // filter product based on category
  const [selectedCategory, setSelectedCategory] = useState("All");
  const menuItems = [...new Set(Data.map((val) => val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newval) => {
      return newval.category === curcat;
    });
    setSelectedCategory(curcat);
    setProduct(newItem);
  };

  return (
    <>
      <PageHeader title="Our Shop Page" currPage="shop" />

      {/* shop page start */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12 ">
              <article>
                <div className="shop-title d-flex flex-wrap jusrify-contant-between">
                  <p>{showResult}</p>
                  <div
                    className={`product-view-mode ${
                      GridList ? "gridActive" : "listActive"
                    }`}
                  >
                    <div className="px-3">
                      <a
                        className="grid  "
                        onClick={() => setGridList(!GridList)}
                      >
                        <i className="icofont-ghost  "></i>
                      </a>

                      <a
                        className="list px-3"
                        onClick={() => setGridList(!GridList)}
                      >
                        <i className="icofont-listine-dots  "></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <ProductCard GridList={GridList} Products={currentProducts} />
                </div>
                <Pagination
                  productperPage={productperPage}
                  totalProducts={product.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>

            <div className="col-lg-4 col-12">
              <aside>
                <Search products={product} GridList={GridList} />
                <ShopCategory
                  filterItem={filterItem}
                  setItem={setProduct}
                  menuItem={menuItems}
                  setProducts={setProduct}
                  selectedCategory={selectedCategory}
                />

                <PopularPost />
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
