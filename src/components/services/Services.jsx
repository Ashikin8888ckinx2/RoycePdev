import React from 'react'
import { Service } from './Service'
import '../../stylesheets/services.css'
import { servicesArray } from "./servicesArray"
import { CtaButton } from "../../components/CtaButton"

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
      <CtaButton className="service-cta" />
    </div>
  )
}
