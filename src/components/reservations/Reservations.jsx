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


  const months = new Array()
  months[1] = 'January'
  months[2] = 'February'
  months[3] = 'March'
  months[4] = 'April'
  months[5] = 'May'
  months[6] = 'June'
  months[7] = 'July'
  months[8] = 'August'
  months[9] = 'September'
  months[10] = 'October'
  months[11] = 'November'
  months[12] = 'December'

  const times = [
    '10:00am',
    '10:30am',
    '11:00am',
    '11:30am',
    '12:00pm',
    '12:30pm',
    '1:00pm',
    '1:30pm',
    '2:00pm',
    '2:30pm',
    '3:00pm',
    '3:30pm',
    '4:00pm',
    '4:30pm',
    '5:00pm',
    '5:30pm',
    '6:00pm',
    '6:30pm',
  ]

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
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [service, setService] = useState()
  const [barber, setBarber] = useState('chris')


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
    setName(e.target.value)
  }
  const emailChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div className='reservation-main-container'>
      <div className='reservation-items-container'>
        <label htmlFor='service'>Service: </label>
        <select id='service' name='service' onChange={serviceChange}>
          {servicesArray.map((service) => (
            <option key={service.name}>{service.name}</option>
          ))}
        </select>
        <label htmlFor='barber'>Barber: </label>
        <select onChange={barberChange} id='barber' name='barber'>
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
          {times.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        <label htmlFor='name'>Name: </label>
        <input onChange={nameChange} type='text' id='name' name='name' />
        <label htmlFor='email'>Email: </label>
        <input onChange={emailChange} type='email' id='email' name='email' />
        <button type='submit'>Book Reservation</button>


        {/* <div>{barber}</div>
        <div>{service}</div>
        <div>{apptTime}</div>
        <div>{months[selectedDay.month] + ' ' + selectedDay.day}</div>
        <div>{name}</div>
        <div>{email}</div> */}
      </div>
    </div>
  )
}
