
import { Service } from './Service'
import '../../stylesheets/services.css'
import { servicesArray } from "./servicesArray"
import { CtaButton } from "../../components/CtaButton"
import { NavLink } from 'react-router-dom'

import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";


export const Services = () => {
  const d = new Date()
  const defaultValue = {
    year: 2021,
    month: 11,
    day: d.getDate(),
  }
  const [selectedDay, setSelectedDay] = useState(defaultValue)
  

  return (
    <div className='services-container'>
      <div className="service-card-container">
      {servicesArray.map((e) => (
        <Service
          key={e.name}
          name={e.name}
          price={e.price}
          description={e.description}
        />
      ))}
      </div>

      <NavLink exact to='/reservations'><CtaButton className="service-cta" /> </NavLink>
    </div>
  )
}
