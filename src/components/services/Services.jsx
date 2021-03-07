import React from 'react'
import { Service } from './Service'
import '../../stylesheets/services.css'
import { servicesArray } from "./servicesArray"
import { CtaButton } from "../../components/CtaButton"
import { NavLink } from 'react-router-dom'

export const Services = () => {
  

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
