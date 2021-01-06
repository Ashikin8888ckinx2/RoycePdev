import { React, useState } from 'react'
import chris from '../pictures/chris.png'
import jason from '../pictures/jason.png'
import rachel from '../pictures/rachel.png'
import rodolfo from '../pictures/rodolfo.png'
import '../stylesheets/staff.css'

export const Staff = () => {

  const [ aboutMe, setAboutMe ] = useState('Click on the staff member to find out more about them')

  const staffMembers = [
    {
      employeeId: 324325,
      name: 'Chris',
      picture: chris,
      about:
        "Born and raised in Miami, FL, Chris began cutting in 2011 at the upscale Brooklyn based barbershop, Persons of Interest. In 2013 he moved to San Diego with his wife and three children and began building a loyal clientele on the west coast. When he's not at the shop, Chris enjoys playing guitar, going to shows and weekend camping trips with his family and friends.",
    },
    {
      employeeId: 546453,
      name: 'Jason',
      picture: jason,
      about:
        'Jason is a well-rounded barber who enjoys doing haircuts from fades to all-scissor work. Precision hair cutting, styling and attention to detail are vital to each service. He is a San Diego native who enjoys travel, soccer, fitness, coffee and movies!',
    },
    {
      employeeId: 39299,
      name: 'Rachel',
      picture: rachel,
      about:
        "Rachel is a native San Diegan who has been cutting hair since 2011, and specializing in men's hair since 2014. She believes a strong consultation is one of the most important parts of the haircut and enjoys giving haircuts that fit a persons lifestyle on a day to day basis. When not at work, Rachel enjoys spending time with family & friends, taking trips to the mountains & desert and packing her brain with random bits of knowledge.",
    },
    {
      employeeId: 56757,
      name: 'Rodolfo',
      picture: rodolfo,
      about: 'Rodolfo has been cutting hair since late 2014, starting at the young age of eighteen, and has thoroughly enjoyed it for the last 6 years. He is confident and skilled in all lengths, textures, and hair types. He especially enjoys longer, messy, textured haircuts. Rodolfo is a local San Diegan who grew up in the punk and hardcore scene. He also enjoys movies and film photography.',
    },
  ]

 

  return (
    <div className='staff-section-container'>
      <div className='card-container'>
        {staffMembers.map((member) => (
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
