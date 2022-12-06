import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Tretment from '../../../assets/images/treatment.png'
import Service from './Service';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening
        },
    ]

    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className=' font-bold text-primary uppercase text-4xl'>Our Services</h3>
                <h2 className='text-3xl mt-2 mb-10 text-slate-500 text-bold'>Services We Provide</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className="hero py-10 mt-10 ">
                <div className="hero-content flex-col lg:flex-row" >
                    <img src={Tretment} className="rounded-lg lg:w-1/2 lg:h-[80vh] shadow-2xl" />
                    <div className='md:w-2/4 lg:pl-20'>
                        <h1 className="text-3xl mb-5 md:text-4xl font-bold text-[#19D3AE] md:mb-8">Exceptional Dental Care,<br></br> on Your Terms</h1>
                        <p className="md:py-6 text-[20px] mb-8">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Link to={`/allDoctior`}><PrimaryButton>Getting Started</PrimaryButton></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;