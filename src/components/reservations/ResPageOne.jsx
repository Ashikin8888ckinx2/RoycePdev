import { useState } from 'react'
import Calendar from 'react-calendar'

export const ResPageOne = () => {
  const [date, setDate] = useState(new Date())
  const today = new Date()
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

  const selectedDay = weekday[String(date.getDay())]
  const selectedMonth = month[String(date.getMonth())]

  function onChange(nextValue) {
    setDate(nextValue)
  }

  console.log(date)
  return (
    <div>
      <Calendar
        className='calendar'
        onChange={onChange}
        value={date}
        next2Label={null}
        prev2Label={null}
        showNeighboringMonth={false}
        minDate={new Date()}
      />
      <div> {selectedDay + " " + selectedMonth}  </div>
    </div>
  )
}
