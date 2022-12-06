import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import Testimonial from '../Testimonial/Testimonial';
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
        <section className='mt-32'
            style={{
                background: `url(${appointment})`,



            }}
        >
            <div className="hero pt-10">
                <div className="hero-content flex-col lg:flex-row relative">
                    <img src='https://i.ibb.co/QvgNMH0/image-removebg-preview.png' alt="" className="-mt-[140px] hidden md:block lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className=' px-3 lg:px-10'>
                        <h4 className='text-4xl text-primary font-bold  lg:mb-5' >Appointment</h4>
                        <h1 className=" text-white text-3xl font-bold lg:mb-2 ">Make an appointment Today</h1>
                        <p className="text-white py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Link to={`/appointment`}> <PrimaryButton>Appointment</PrimaryButton></Link>
                    </div>
                </div>
            </div>

            <Testimonial></Testimonial>

            {/* ---------------input field------------- */}
            <h1 className='text-center md:text-2xl lg:text-2xl  pt-5 text-[#19D3AE]'>Contact us</h1>
            <h1 className='text-center mg:text-3xl lg:text-3xl  text-white py-5'>Stay connected with us</h1>
            <div className="flex justify-center items-center pb-20">

                <div className=" grid grid-cols-1 md:w-1/3">
                    <input type="text" placeholder="Type here" className="my-4 input input-bordered input-info md:w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered input-info w-full " />
                    <br></br>
                    <textarea className="textarea textarea-accent mb-4 w-full " placeholder="Bio"></textarea>
                    <div className="flex justify-center">
                        <PrimaryButton >Get Submite</PrimaryButton>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default MakeAppointment;