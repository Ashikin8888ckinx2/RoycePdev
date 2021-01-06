import { React, useState } from 'react'

export const StaffMember = (props) => {


  const {name, picture, bio } = props

  return (
    <div  className= "staff-card">
      <img className="picture-container" src={picture} alt={name}/>
      <h2>{name}</h2>
    </div>
  )
}
