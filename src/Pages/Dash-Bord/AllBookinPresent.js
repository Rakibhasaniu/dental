import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthContext/UserContext';
import useAdmin from '../../hook/useAdmin';
import useTitle from '../../hook/useTitle';

const AllBookinPresent = () => {
    useTitle('All Bookin Present')
    const { user } = useContext(AuthContext);


    const url = `https://doctors-portal-server-site-zeta.vercel.app/users`;

    //    --------- TenStand Query------------
    const { data: booking = [], refetch } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    console.log(booking)


    const adminBtn = id => {
        fetch(`https://doctors-portal-server-site-zeta.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.acknowledged) {
                    toast.success('Make Admin Successfully !')
                    refetch();
                }
            }).catch(err => {
                console.log(err)

            })
    }


    return (
        <div className='md:mx-16 md:mt-24 mt-36'>
            <h1 className='text-3xl text-bold text-black mb-10 text-center'>All Dental Booking Presents <span className='text-fuchsia-700'>{booking?.length}</span></h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name/Email</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>

                        {booking.map((bok, i) =>

                            <tr key={bok?._id}>
                                <th><div className="flex">{i + 1} <img className='rounded-full md:w-10 ml-5' src={bok?.img} alt="" /></div></th>

                                <td>
                                    <div className="block ">
                                        <h1>{bok?.name}</h1>
                                        <h1 className='text-red-900'>{bok?.email}</h1>
                                    </div>
                                </td>
                                <td className='text-gray-800'> {
                                    bok?.role !== 'admin' && <h1 onClick={() => adminBtn(bok?._id)} className=' px-5 py-1 hover:bg-pink-700 btn outline-none border-none'> Admin</h1>
                                }</td>
                            </tr>

                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBookinPresent;