import React from 'react'


export const Service = (props) => {

  const {name, price, description} = props

  return (
    <div className="service-card">
      <h2 className="service-card-header">{name}</h2>
      <div>{price}</div>
      <p>{description}</p>
    </div>
  )
}
