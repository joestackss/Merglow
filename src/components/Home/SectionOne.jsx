import React from "react";
import './sectionone.css'

const SectionOne = () => {
  return (
    <div className=" section-one flex bg-orange-700 py-8  text-white " >
      <div className="container flex flex-col justify-center items-center mx-auto ">
        <h2 className="mb-8 text-center text-xl max-w-3xl">
          Take yourself on a date with extraordinary gifts from nature that will
          bring you back to the ultimate balance.
        </h2>
        <p className="text-center max-w-xl">
          A quality life is a collection of little but crucial things. We are
          what surrounds us and what is inside of us. Everything that we
          encounter, affects us and determines our quality of life. If the body
          is sick, the soul is sick as well.
        </p>
      </div>
    </div>
  );
};

export default SectionOne;
