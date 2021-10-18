import React, { useState } from 'react';
import { AppointmentDetailView } from './AppointmentDetailView';

const appointmentTimeOfDay = startsAt => {
  const [h, m] = new Date(startsAt).toTimeString().split(':');
  return `${h}:${m}`;
};

export const Appointment = ({ customer }) => (
  <div>{customer.firstName}</div>
);

export const AppointmentsDayView = ({ appointments }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(
    0
  );

  return (
    <div id="appointmentsDayView" style="display:flex">
    <div id="days" style="width:20%">
      <ol>
        {appointments.map((appointment, i) => (
          <li key={appointment.startsAt}>
            <button
              type="button"
              onClick={() => setSelectedAppointment(i)}>
              {appointmentTimeOfDay(appointment.startsAt)}
            </button>
          </li>
        ))}
      </ol>
      
      </div>
      <div id="details" style="width:20%">  
        {appointments.length === 0 ? (
          <p>There are no appointments scheduled for today.</p>
        ) : (
          <>
          <Appointment {...appointments[selectedAppointment]} />
          <AppointmentDetailView customer={appointments[selectedAppointment].customer} /> 
          </>
        )}
          
      </div>
    </div>
  );
};
