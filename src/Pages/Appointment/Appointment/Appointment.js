import React, { useState } from 'react';
import useTitle from '../../../hook/useTitle';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    useTitle("Appointment Booking")
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div className='mt-14'>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppointments
                selectedDate={selectedDate}
            ></AvailableAppointments>
        </div>
    );
};

export default Appointment;