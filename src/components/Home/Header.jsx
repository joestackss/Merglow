import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className=" flex flex-col h-fit ">
      <div className="sec-one h-screen relative pb-10">
      </div>

      <div className="w-2/4 absolute top-32 left-s ">
        <img
          src="header-gemstone.png"
          alt="gemstone"
          className="rounded-full "
        />
      </div>

      <div className=" section-one flex bg-orange-700 text-white pb-12 ">
        <div className="container flex flex-col justify-center items-center mx-auto ">
          <h2 className="my-8 text-center text-xl max-w-3xl pt-56">
            Take yourself on a date with extraordinary gifts from nature that
            will bring you back to the ultimate balance.
          </h2>
          <p className="text-center max-w-xl">
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
