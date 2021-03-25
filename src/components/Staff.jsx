import { React, useState } from 'react'
import { staffArray } from './staffArray'
import { CtaButton } from './CtaButton'
import { NavLink } from 'react-router-dom'
import '../stylesheets/staff.css'

export const Staff = () => {
  const [aboutMe, setAboutMe] = useState(staffArray[0].about)

  return (
    <div className='staff-section-container'>
      <div className='card-container'>
        {staffArray.map((member) => (
          <div
            key={member.employeeId}
            onClick={() => setAboutMe(member.about)}
            className='staff-card'
          >
            <div className='img-container'>
              <img
                className='picture-container'
                src={member.picture}
                alt={member.name}
              />
            </div>
            <h2>{member.name}</h2>
          </div>
        ))}
      </div>
      <div className='bio-container'>
        <p className='bio-paragraph'>{aboutMe}</p>
        <NavLink exact to='/reservations'>
          <CtaButton />
        </NavLink>
      </div>
    </div>
  )
}
