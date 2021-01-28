import { useState, useRef, useEffect } from 'react'
import Calendar from 'react-calendar'
import { servicesArray } from '../services/servicesArray'
import { staffArray } from '../staffArray'
import '../../stylesheets/reservations.css'

export const ResPageOne = () => {
  const weekday = new Array(7)
  weekday[0] = 'Sunday'
  weekday[1] = 'Monday'
  weekday[2] = 'Tuesday'
  weekday[3] = 'Wednesday'
  weekday[4] = 'Thursday'
  weekday[5] = 'Friday'
  weekday[6] = 'Saturday'

  const month = new Array()
  month[0] = 'January'
  month[1] = 'February'
  month[2] = 'March'
  month[3] = 'April'
  month[4] = 'May'
  month[5] = 'June'
  month[6] = 'July'
  month[7] = 'August'
  month[8] = 'September'
  month[9] = 'October'
  month[10] = 'November'
  month[11] = 'December'

  const times = [
    '9:00am',
    '9:30am',
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

  const [date, setDate] = useState(new Date())
  const [apptTime, setApptTime] = useState()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [service, setService] = useState()
  const [barber, setBarber] = useState()

  const selectedDay = weekday[String(date.getDay())]
  const selectedMonth = month[String(date.getMonth())]
  const selectedDate = date.getDate()

  function onChange(selectedValue) {
    setDate(selectedValue)
  }

  return (
    <div>
      <h2>Choose Your Service </h2>
      {servicesArray.map((e) => (
        <div onClick={() => setService(e.name)} className='reservation-service'>
          {e.name}
        </div>
      ))}
      <div>{service}</div>

      <h2>Choose Your Barber</h2>
      <div className="barber-card-container">
        {staffArray.map((member) => (
          <div
            onClick={() => setBarber(member.name)}
            className='reservation-staff-container'
          >
            <div>{member.name}</div>
            <img className='reservation-picture' src={member.picture}></img>
            <div>Schedule</div>
            <div>{member.schedule}</div>
          </div>
        ))}
      </div>
      <div>{barber}</div>

      <Calendar
        className='calendar'
        onChange={onChange}
        value={date}
        next2Label={null}
        prev2Label={null}
        showNeighboringMonth={false}
        minDate={new Date()}
      />
      <div>
        {' '}
        {selectedDay + ',' + ' ' + selectedMonth + ' ' + selectedDate}{' '}
      </div>

      {times.map((time) => (
        <button
          key={time}
          onClick={() => setApptTime(time)}
          className='time-button'
        >
          {time}
        </button>
      ))}
      <div className='time-button-container'></div>
      <div>{apptTime}</div>
      <div>Name</div>
      <input onChange={(e) => setName(e.target.value)} type='text'></input>
      <div>{name}</div>

      <div>Email</div>
      <input type='email' onChange={(e) => setEmail(e.target.value)}></input>
      <div>{email}</div>
    </div>
  )
}
