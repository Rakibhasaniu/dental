import React from "react";
import { Link } from "react-router-dom";
import chair from "../../../assets/images/chair.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div className="hero py-10 mt-10 h-[85vh]">
      <div className="hero-content md:justify-between flex-col lg:flex-row-reverse">
        <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt="" />
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">
            Your New Smile Starts Here
          </h1>
          <p className="py-6 pr-8">
            We Are Dedicated To Creating Beautiful SMILES
          </p>
          <Link to={`/appointment`}>
            <PrimaryButton>Getting Started</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
