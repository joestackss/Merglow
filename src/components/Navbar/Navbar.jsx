import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import { FaTwitter, FaSkype, FaVimeoV } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const navHandler = () => {
    setNavToggle((prevData) => !prevData);
  };

  return (
    <nav className="navbar w-100 flex">
      <div className="container w-100">
        <div className="navbar-content flex fw-7">
          <div className="brand-and-toggler flex flex-between w-90">
            <Link to="/" className="navbar-brand fs-26">
              Merglow
            </Link>
            <div
              type="button"
              className={`hamburger-menu ${
                navToggle ? "hamburger-menu-change" : ""
              }`}
              onClick={navHandler}
            >
              <div className="bar-top"></div>
              <div className="bar-middle"></div>
              <div className="bar-bottom"></div>
            </div>
          </div>

          <div
            className={`navbar-collapse ${
              navToggle ? "show-navbar-collapse" : ""
            }`}
          >
            <div className="navbar-collapse-content">
              <ul className="navbar-nav">
                <li className="text-black">
                  <Link to="/">Shop</Link>
                </li>
                <li className="text-black">
                  <Link to="/">Science</Link>
                </li>
                <li className="text-black">
                  <Link to="/">About Us</Link>
                </li>
              </ul>
              <div className="flex navbar-btns">
                <button type="button" className="btn">
                  <IoMdRocket /> <span>login</span>
                </button>
                <button type="button" className="btn">
                  <IoMdRocket /> <span>cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;