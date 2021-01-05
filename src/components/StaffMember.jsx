import React from 'react'

export const StaffMember = (props) => {

  const {name, picture } = props

  return (
    <div className= "staff-card">
      <img className="picture-container" src={picture}/>
      <h2>{name}</h2>
    </div>
  )
}
