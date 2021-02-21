import React from 'react'
import { Service } from './Service'
import '../../stylesheets/services.css'
import { servicesArray } from "./servicesArray"
import { CtaButton } from "../../components/CtaButton"

export const Services = () => {
  
  return (
    <div className='services-container'>
      <div className="service-card-container">
      {servicesArray.map((service) => (
        <Service
          key={service.name}
          name={service.name}
          price={service.price}
          description={service.description}
        />
      ))}
      </div>
      <CtaButton className="service-cta" />
    </div>
  )
}
