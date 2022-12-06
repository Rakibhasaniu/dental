import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import useTitle from '../../hook/useTitle';
import DoctorCard from './DoctorCard';

const ManageDoctors = () => {

    useTitle("All Doctor")
    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('https://doctors-portal-server-site-zeta.vercel.app/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {
                console.log(error);
            }
        }
    });

    console.log(doctors)


    if (isLoading) {
        return <div className="h-[80vh] w-[100%] flex justify-center items-center relative">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </div>
    }

    return (
        <>
            <section className='mt-20 '>
                <div className="grid md:grid-cols-3 md:px-10 gap-2 ">
                    {
                        doctors?.map((doctor) => <DoctorCard doctor={doctor} key={doctor?._id} refetch={refetch} ></DoctorCard>)
                    }

                </div>
            </section>
        </>
    );
};

export default ManageDoctors;