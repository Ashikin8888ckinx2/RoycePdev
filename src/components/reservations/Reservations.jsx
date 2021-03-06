import { useState } from 'react'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import DatePicker from 'react-modern-calendar-datepicker'
import { servicesArray } from '../services/servicesArray'
import { staffArray } from '../staffArray'
import { disabledDaysChris } from '../employeeschedule/disabledDaysChris'
import { disabledDaysJason } from '../employeeschedule/disabledDaysJason'
import { disabledDaysRachel } from '../employeeschedule/disabledDaysRachel'
import { disabledDaysRodolfo } from '../employeeschedule/disabledDaysRodolfo'
import '../../stylesheets/reservations.css'

export const Reservations = () => {

  const months = ['not a month', 'January','February','March','April','May','June','July','August','September','October','November','December']

  const times = ['10:00am','10:30am','11:00am','11:30am','12:00pm','12:30pm','1:00pm','1:30pm','2:00pm','2:30pm','3:00pm','3:30pm','4:00pm','4:30pm','5:00pm','5:30pm','6:00pm','6:30pm']

  const maximumDate = {
    year: 2021,
    month: 12,
    day: 31,
  }

  const d = new Date()
  const defaultValue = {
    year: 2021,
    month: 11,
    day: d.getDate(),
  }

  const [selectedDay, setSelectedDay] = useState(defaultValue)
  const [apptTime, setApptTime] = useState()
  const [customerName, setCustomerName] = useState()
  const [email, setEmail] = useState()
  const [service, setService] = useState()
  const [barber, setBarber] = useState()
  const [confirmation, setConfirmation] = useState(true)

  const barberChange = (e) => {
    setBarber(e.target.value)
  }
  const serviceChange = (e) => {
    setService(e.target.value)
  }
  const timeChange = (e) => {
    setApptTime(e.target.value)
  }
  const nameChange = (e) => {
    setCustomerName(e.target.value)
  }
  const emailChange = (e) => {
    setEmail(e.target.value)
  }
  const closeWindow = () => {
    // setService(undefined)
    // setBarber(undefined)
    // setApptTime(undefined)
    // setCustomerName(undefined)
    // setEmail(undefined)
    setConfirmation(true)
  }

  const openWindow = () => {
    if (service === undefined) {
      alert('Please select a service')
      return
    }
    if (barber === undefined) {
      alert('Please select a barber')
      return
    }
    if (apptTime === undefined) {
      alert('Please select a time for your appointment')
      return
    }
    if (customerName === undefined) {
      alert('Please enter your name')
      return
    }
    if (email === undefined) {
      alert('Please enter your email')
      return
    }
    if (!email.includes('@')) {
      alert('Please enter a valid email')
      return
    } else {
      setConfirmation(false)
    }
  }

  return (
    <div className='reservation-main-container'>
      <h1>Reservations</h1>
      <p>
        Dates and times available reflect the schedule of the Barber selected
      </p>
      <div className='reservation-items-container'>
        <label htmlFor='service'>Service: </label>
        <select id='service' name='service' onChange={serviceChange}>
          <option value='value'></option>
          {servicesArray.map((service) => (
            <option key={service.name}>{service.name}</option>
          ))}
        </select>
        <label htmlFor='barber'>Barber: </label>
        <select
          defaultValue=' '
          onChange={barberChange}
          id='barber'
          name='barber'
        >
          <option value='value'></option>
          {staffArray.map((staff) => (
            <option key={staff.name}>{staff.name}</option>
          ))}
        </select>
        <label> Date: </label>
        <DatePicker
          disabledDays={
            barber === 'Rachel'
              ? disabledDaysRachel
              : barber === 'Chris'
              ? disabledDaysChris
              : barber === 'Rodolfo'
              ? disabledDaysRodolfo
              : barber === 'Jason'
              ? disabledDaysJason
              : disabledDaysRachel
          }
          value={selectedDay}
          onChange={setSelectedDay}
          maximumDate={maximumDate}
        />
        <label htmlFor='times'>Time: </label>
        <select onChange={timeChange} id='times' name='times'>
          <option value='value'></option>
          {times.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        <label htmlFor='name' required>
          Name:{' '}
        </label>
        <input onChange={nameChange} type='text' id='name' name='name' />
        <label htmlFor='email'>Email: </label>
        <input onChange={emailChange} type='email' id='email' name='email' />
        <button type='submit' onClick={openWindow}>
          Book Reservation
        </button>
      </div>

      <div
        className={`reservation-confirmation-container ${
          confirmation && 'hide-display'
        }`}
      >
        <div className='reservation-confirmation-items-container'>
          <p>
            You're all set for your {service} with {barber} on{' '}
            {months[selectedDay.month] + ' ' + selectedDay.day} at {apptTime},{' '}
            {customerName}. A reminder email has been sent to {email}. If you
            need to make any changes or cancel the appointment, give us a call
            at 619-867-5309.{' '}
          </p>
          <button onClick={closeWindow}>Close</button>
        </div>
      </div>
    </div>
  )
}
