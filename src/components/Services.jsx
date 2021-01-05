import React from 'react'
import { Service } from './Service'
import '../stylesheets/services.css'

export const Services = () => {
  

  const services = [
    {
      name: 'Haircut',
      price: '$35',
      description:
        'All Haricuts are finished with a Hot Lather Neck Shave and a Hot Towel and Shoulder Massage',
    },
    {
      name: 'Beard Trim',
      price: '$35',
      description:
        'All Beard Trims are finished with 2 Hot Towels and a Hot Lather Neck Shave complete with a Cold Towel',
    },
    {
      name: 'Haircut and Beard Trim',
      price: '$65',
      description:
        'Haircut and Beard Trim with Hot Towels and a Shoulder Massage',
    },
    {
      name: 'How Towel Shave',
      price: '45',
      description:
        '3 Hot Towels and 1 Cold Towel Process. All shaves are performed just like the way they did back in the day!',
    },
    {
      name: 'The Works',
      price: '$75',
      description: 'Haircut and Hot Towel Shave',
    },
  ]

  return (
    <div className='services-container'>
      <h1>Services</h1>
      <div className="service-card-container">
      {services.map((service) => (
        <Service
          key={service.name}
          name={service.name}
          price={service.price}
          description={service.description}
        />
      ))}
      </div>
    </div>
  )
}
