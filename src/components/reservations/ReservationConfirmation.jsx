import React from 'react'
import '../../stylesheets/reservations.css'

export const ReservationConfirmation = (props) => {
  const { service, barber, apptTime, date, name, email } = props
  return (
    <div className='reservation-confirmation-container'>
      <div className='reservation-confirmation-items-container'>
        <p>
          Thank you for scheduling your appointment. A reminder email has been sent to the email address below. If you need to make any
          changes or cancel the appointment, give us a call at 619-867-5309{' '}
        </p>
        <div>Service</div>
        <span>{service}</span>
        <div>Barber</div>
        <span>{barber}</span>
        <div>Time</div>
        <span>{apptTime}</span>
        <div>Date</div>
        <span>{date}</span>
        <div>Name</div>
        <span>{name}</span>
        <div>Email</div>
        <span>{email}</span>
        <button>Close</button>
      </div>
    </div>
  )
}
