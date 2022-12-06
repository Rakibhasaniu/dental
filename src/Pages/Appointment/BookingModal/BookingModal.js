import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../AuthContext/UserContext';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    // treatment is just another name of appointmentOptions with name, slots, _id
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');
    //Context component user
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const names = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // [3, 4, 5].map((value, i) => console.log(value))
        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: names,
            slot,
            email,
            phone,
            photo: user?.photoURL
        }

        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        console.log(booking);

        //Fetch backin server site
        fetch('https://doctors-portal-server-site-zeta.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(result => result.json())
            .then(data => {
                console.log(data)
                if (data?.acknowledged) {
                    setTreatment(null);
                    toast.success('Your Appoentment Booking successfuly ')
                    refetch();
                } else {
                    toast.error(data?.messsage)
                }

            })


    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full input-bordered " />
                        <select name="slot" className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered " />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;