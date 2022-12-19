import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { FaCheckCircle, FaRegWindowClose } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthContext/UserContext';
import useTitle from '../../hook/useTitle';

const MyAppointment = () => {
    useTitle('Dasbord')
    const { user } = useContext(AuthContext);
    const url = `https://doctors-portal-server-site-zeta.vercel.app/all-booking/`;

    //    --------- TenStand Query------------
    const { data: booking = [], refetch } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    // console.log(booking)


    // ----Delete----

    const deleteItem = service => {
        console.log(service?._id);
        fetch(`https://doctors-portal-server-site-zeta.vercel.app/all-booking/${service?._id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.acknowledged) {
                    refetch();
                    toast.error(`Doctor ${service?.patient} deleted successfully`)

                }
            })
    }

    // ----Delete----
    const successItem = service => {
        console.log(service);
        toast.success(`Confram Sending Massage ${service?.email} `);
    }

    // console.log(appointmentDate, email, patient, treatment, slot, _id)

    return (
        <div className='md:mx-16 md:mt-24 mt-36'>
            <h1 className='text-3xl text-bold text-black mb-10 text-center'>My Dental Booking</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Services</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>

                        {booking?.map((bok, i) =>

                            <tr key={bok?._id}>
                                <th><div className="flex">{i + 1} <img className='rounded-full md:w-10 ml-5' src={bok?.photo} alt="" /></div></th>

                                <td>
                                    <div className="block ">
                                        <h1>{bok?.patient}</h1>
                                        <h1 className='text-red-900'>{bok?.email}</h1>
                                    </div>
                                </td>
                                <td>
                                    <div className="block ">
                                        <h1>{bok?.treatment}</h1>
                                        <h1 className='text-red-900'>{bok?.slot}</h1>
                                    </div>
                                </td>

                                <td className='text-teal-500'>{bok?.appointmentDate}</td>
                                <td>
                                    <div className="block ">
                                        <h1 onClick={() => successItem(bok)} className='text-green-700 hover:text-green-500 cursor-pointer text-[20px]'> <FaCheckCircle></FaCheckCircle></h1>
                                        <h1 onClick={() => deleteItem(bok)} className='text-red-800 hover:text-red-600 mt-3 cursor-pointer text-[20px]'><FaRegWindowClose></FaRegWindowClose></h1>
                                    </div>
                                </td>
                            </tr>

                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;