import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Rakib Hasan",
      img: people1,
      review:
        "Highly recommend! I have LOTS of anxiety about going to the dentist. After this visit, I have become an advocate. They made me feel comfortable and I believe the treatment plan is actionable and has my best interest in mind",
      location: "Bogura",
    },
    {
      _id: 2,
      name: "Sohana Shitol",
      img: people2,
      review:
        "Dr. provided an excellent experience. After having had a previous experience that was not ideal, I was reluctant to find a new dentist that I could trust. Dr. took the time to explain the details of what my treatment plan was and the “why behind the what”. Great job!",
      location: "Rajshahi",
    },
    {
      _id: 3,
      name: "Sumi",
      img: people3,
      review:
        "Just had my first visit this morning and I will be back in 6 months! Everyone is professional and friendly. Office is very pretty and latest technology. Easy insurance filing and in network MetLife! I felt sort of pampered. She is also a Coppell HS alum!!! Dr. welcome back and congratulations on your practice in Coppell!! Glad you are here.",
      location: "Dupchancia",
    },
  ];

  return (
    <section className="pt-16 bg-slate-100 pb-20 ">
      <h4 className="text-4xl text-primary font-bold text-center">
        Testimonial
      </h4>
      <h2 className="text-4xl text-center pt-3 text-[#7a87a2] text-bold">
        What Our Patients Says
      </h2>
      <div className="flex justify-between md:mx-5">
        <div></div>
        <figure>
          <img className="w-10 mt-3 lg:w-28 pb-5" src={quote} alt="" />
        </figure>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
