import { useState, useRef, useEffect } from 'react'

import { Calendar } from 'react-modern-calendar-datepicker'
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
  const weekday = new Array(7)
  weekday[0] = 'Sunday'
  weekday[1] = 'Monday'
  weekday[2] = 'Tuesday'
  weekday[3] = 'Wednesday'
  weekday[4] = 'Thursday'
  weekday[5] = 'Friday'
  weekday[6] = 'Saturday'

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

  const [date, setDate] = useState(new Date())
  const [selectedDay, setSelectedDay] = useState(defaultValue)
  const [apptTime, setApptTime] = useState()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [service, setService] = useState()
  const [barber, setBarber] = useState()

  const e = new Date()

  // const selectedDay = weekday[String(date.getDay())]
  const selectedMonth = months[selectedDay.month]
  // const selectedDate = date.getDate()

  function onChange(selectedValue) {
    setDate(selectedValue)
  }
  return (
    <div className='reservation-main-container'>
      <div className='reservation-options-container'>
        <label for='service'>Service: </label>
        <select id='service' name='service'>
          {servicesArray.map((service) => (
            <option>{service.name}</option>
          ))}
        </select>
        <label for='barber'>Barber: </label>
        <select id='barber' name='barber'>
          {staffArray.map((staff) => (
            <option>{staff.name}</option>
          ))}
        </select>
        <label> Date: </label>
        <DatePicker
          value={selectedDay}
          onChange={setSelectedDay}
          inputPlaceholder='Select a day'
        />
        <label for='times'>Time: </label>
        <select id='times' name='times'>
          {times.map((time) => (
            <option>{time}</option>
          ))}
        </select>
        <label for='name'>Name: </label>
        <input type='text' id='name' name='name' />
        <label for='email'>Email: </label>
        <input type='email' id='email' name='email' />
        <button type='submit'>Book Reservation</button>
      </div>
      {/* </div> */}
    </div>
  )
}
