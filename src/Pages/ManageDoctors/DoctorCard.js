import React from 'react';
import { toast } from 'react-toastify';

const DoctorCard = ({ doctor, refetch }) => {

    const handleDeleteDoctor = doctor => {
        console.log(doctor);
        fetch(`https://doctors-portal-server-site-zeta.vercel.app/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Doctor ${doctor.name} deleted successfully`)
                }
            })
    }

    return (
        <>
            <div className="card w-96 h-[80vh] bg-base-100 shadow-xl image-full">
                <figure><img className='opacity-95' src={doctor?.image} alt="Shoes" /></figure>
                <div className="card-body ">
                    <h1 onClick={() => handleDeleteDoctor(doctor)} className='text-3xl absolute top-2 right-5 cursor-pointer hover:text-red-700'>x</h1>
                    <h2 className="card-title absolute bottom-[50px]">{doctor?.name}</h2>
                    <p className=" absolute bottom-6">Specialty : {doctor?.specialty}</p>
                    <p className=" absolute  bottom-[2px]">Email : {doctor?.email}</p>

                </div>
            </div>
        </>
    );
};

export default DoctorCard;