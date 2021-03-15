import { useState, useRef, useEffect } from 'react'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import { DatePicker, Calendar } from 'react-modern-calendar-datepicker'
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
  console.log(selectedDay)

  // const selectedDay = weekday[String(date.getDay())]
  const selectedMonth = months[selectedDay.month]
  // const selectedDate = date.getDate()

  function onChange(selectedValue) {
    setDate(selectedValue)
  }
  return (
    <div className='reservation-main-container'>
      <div className='reservation-options-container'>
        {/* Service */}

        <div className='reservation-service-container'>
          <h2>Select a Service </h2>
          <div className='reservation-service-buton-container'>
            {servicesArray.map((e) => (
              <button key={e.name} onClick={() => setService(e.name)}>
                {e.name}
              </button>
            ))}
          </div>
        </div>

        {/* Barber  */}

        <div className='barber-section-container'>
          <h2>Select a barber</h2>
          <div className='barber-card-container'>
            {staffArray.map((member) => (
              <button
                key={member.name}
                onClick={() => setBarber(member.name)}
                className='barber-card'
              >
                <div className='barber-name'>{member.name}</div>
                <img className='barber-card-image' src={member.picture}></img>
                <div className='barber-schedule-header'>Schedule</div>
                <div>{member.schedule}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Calendar */}

        <div className='date-main-container'>
          <h2>Select a date</h2>
          <span>
            Calendar dates and times align with selected barber's availability{' '}
          </span>
          <Calendar
            value={selectedDay}
            onChange={setSelectedDay}
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
            maximumDate={maximumDate}
            inputPlaceholder='Select a day'
          />
        </div>

        {/*  Time  */}
        <div className='reservation-time-container'>
          <h2>Select your time</h2>
          <div className='reservation-button-container'>
            {times.map((time) => (
              <button
                key={time}
                onClick={() => setApptTime(time)}
                className='time-button'
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Name and email  */}
        <div className='name-email-container'>
          <h2>Name</h2>
          <input onChange={(e) => setName(e.target.value)} type='text'></input>
          <h2>Email</h2>
          <input
            type='email'
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <button>Place Reservation</button>
        </div>
      </div>

      {/* reservation confirmation */}

      <div className='reservation-confirmation-container'>
        <h2>Your Reservation</h2>
        <div className='reservation-details'>
          <div className="seperator">
          <div className='reservation-title'>Service </div>
          <div className='reservation-selection'>{service}</div>
          </div>
          <div className="seperator">
          <div className='reservation-title'>Barber </div>
          <div className='reservation-selection'>{barber}</div>
          </div>
          <div className="seperator">
          <div className='reservation-title'>Date </div>
          <div className='reservation-selection'> {selectedMonth + ' ' + selectedDay.day}</div>
          </div>
          <div className="seperator">
          <div className='reservation-title'>Time </div>
          <div className='reservation-selection'>{apptTime}</div>
          </div>
          <div className="seperator">
          <div className='reservation-title'>Name </div>
          <div className='reservation-selection'>{name}</div>
          </div>
          <div className="seperator">
          <div className='reservation-title'>Email </div>
          <div className='reservation-selection'>{email}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
