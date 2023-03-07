import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../AuthContext/UserContext";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import useTitle from "../../../hook/useTitle";
import Banner from "../Banner/Banner";
import GallaryDental from "../DentalGallary/GallaryDental";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  useTitle("Home");
  return (
    <div className="mx-5">
      <Banner></Banner>

      <div className="images_background">
        <InfoCards></InfoCards>
        <Services></Services>
      </div>
      <MakeAppointment></MakeAppointment>
      <GallaryDental></GallaryDental>

      <Testimonial></Testimonial>
      {/* ---------------input field------------- */}
      <section className="images_background3">
        <h1 className="text-center md:text-2xl lg:text-2xl  pt-5 text-[#19D3AE]">
          Contact us
        </h1>
        <h1 className="text-center mg:text-3xl lg:text-3xl  text-white py-5">
          Stay connected with us
        </h1>
        <form
          className=""
          action="https://getform.io/f/9b6c087a-4646-4acf-a030-ff7a9eed4209"
          method="POST"
        ></form>
        <div className="flex justify-center items-center pb-20">
          <div className=" grid grid-cols-1 md:w-1/3">
            <input
              type="text"
              placeholder="Type here"
              className="my-4 input input-bordered input-info md:w-full"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full "
            />
            <br></br>
            <textarea
              className="textarea textarea-accent mb-4 w-full "
              placeholder="Bio"
            ></textarea>
            <div className="flex justify-center">
              <PrimaryButton>Submit</PrimaryButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
