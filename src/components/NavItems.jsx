import React, { useState, useContext } from "react";
import "./NavItems.css";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import ProfilePage from "./Profile";
function NavItems() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerfixed, setHeaderFixed] = useState(false);

  //add event listner
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });

  const user = useContext(AuthContext);
  console.log(user);
  return (
    <>
      <header
        className={`header-section style-4 ${
          headerfixed ? "header-fixed fadeInUp" : ""
        }`}
      >
        {/* header top start */}
        <div>
          <div className="container">
            <div
              className={`header-top d-md-none   ${socialToggle ? "open" : ""}`}
            >
              <NavLink to="/sign-up" className="lab-btn me-3">
                <span>Create Account</span>
              </NavLink>
              <Link to="/login">Log in</Link>
            </div>
          </div>
        </div>

        {/* header bottam */}
        <div className="header-bottom">
          <div className="container">
            <div className="header-wrapper">
              <div className="logo-search-acte">
                <div className="logo">
                  <Link to={"/"}>
                    <img src={logo} alt="" />
                  </Link>
                </div>
              </div>

              {/* menu area */}

              <div className="menu-area">
                <div className="menu">
                  <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/shop">Shop</NavLink>
                    </li>
                    <li>
                      <NavLink to="/blog">Blog</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                      {/* <Link to="/profile">
                        <ProfilePage />
                      </Link> */}
                    </li>
                  </ul>
                </div>

                {/* signup and login  */}
                <Link to="/sign-up" className="lab-btn me-3 d-none d-md-block">
                  Create Account
                </Link>
                <Link to="/login" className="d-none d-md-block">
                  Login
                </Link>

                {/* menu toggler */}
                <div
                  onClick={() => setMenuToggle(!menuToggle)}
                  className={`header-bar d-lg-none ${
                    menuToggle ? "active" : ""
                  }`}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                {/* social toggler */}
                <div
                  onClick={() => setSocialToggle(!socialToggle)}
                  className="ellepsis-bar d-md-none"
                >
                  <i className="icofont-info-square fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavItems;
