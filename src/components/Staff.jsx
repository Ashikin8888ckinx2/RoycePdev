import { React, useState } from 'react'
import { staffArray } from "./staffArray"
import '../stylesheets/staff.css'

export const Staff = () => {

  const [ aboutMe, setAboutMe ] = useState('Click on the staff member to find out more about them')

  return (
    <div className='staff-section-container'>
      <div className='card-container'>
        {staffArray.map((member) => (
          <div key={member.employeeId} onClick={()=> setAboutMe(member.about)} className='staff-card'>
            <img
              className='picture-container'
              src={member.picture}
              alt={member.name}
            />
            <h2>{member.name}</h2>
          </div>
        ))}
      </div>
      <div className='bio-container'>{aboutMe}</div>
    </div>
  )
}
