import React from "react";
import Navbar from "../../Navbar/Navbar";
import "./Header-Home.css";

const Header = () => {
  return (
    <header className="header flex flex-center flex-column">
      <Navbar />
      <div className="container">
        <div className="header-content text-center flex flex-center flex-column">
          <h2 className="text-white">
            Take yourself on a date with extraordinary gifts from nature that
            will bring you back to the ultimate balance.
          </h2>
          <p className="text-white">
            A quality life is a collection of little but crucial things. We are
            what surrounds us and what is inside of us. Everything that we
            encounter, affects us and determines our quality of life. If the
            body is sick, the soul is sick as well.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
