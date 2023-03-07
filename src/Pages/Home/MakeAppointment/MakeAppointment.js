import React from "react";
import doctor from "../../../assets/images/doctor-small.png";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import Testimonial from "../Testimonial/Testimonial";
import { Link } from "react-router-dom";
import GallaryDental from "../DentalGallary/GallaryDental";

const MakeAppointment = () => {
  return (
    <section
      className="mt-32"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="hero pt-10">
        <div className="hero-content flex-col lg:flex-row relative">
          <img
            src="https://i.ibb.co/XVWGKHw/doctor.png"
            alt=""
            className="-mt-[140px] hidden md:block lg:w-1/2 rounded-lg shadow-2xl"
          />
          <div className=" px-3 lg:px-10">
            <h4 className="text-4xl text-primary font-bold  lg:mb-5">
              Appointment
            </h4>
            <h1 className=" text-white text-3xl font-bold lg:mb-2 ">
              Make an appointment Today
            </h1>
            <p className="text-white py-6">
              Our mission is to provide quality dental care for you and your
              entire family. ﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿We strive to create lifelong
              relationships so we become an integral part of your family's
              dental health. By providing a clear understanding of your oral
              health and your treatment options, we hope to provide you with a
              well informed plan that you and your family are comfortable with
            </p>
            <Link to={`/appointment`}>
              {" "}
              <PrimaryButton>Appointment</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
