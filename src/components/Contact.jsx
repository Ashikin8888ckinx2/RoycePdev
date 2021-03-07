import Map from './Map'
import '../stylesheets/contact.css'
import { CtaButton } from '../components/CtaButton'
import { NavLink } from 'react-router-dom'

export const Contact = () => {
  return (
    <div className='contact-main-container'>
      <div className='contact-items-container'>
        <div className='contact-map'>
          <Map />
        </div>
        <div className='contact-info'>
          <h2> Contact </h2>
          <span>1052 Garnet Ave, San Diego, CA 92109</span>
          <span>619-867-5309</span>
          <span>Open 7 days per week 9am-7pm</span>
          <div className='contact-reservations'>
            <h2>Online Reservations</h2>
            <NavLink exact to='/reservations'><CtaButton /></NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
