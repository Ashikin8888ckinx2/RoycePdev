import React from 'react'
import { TiArrowRightOutline } from 'react-icons/ti'
import { CtaButton } from './CtaButton'
import '../stylesheets/home.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <div className='home-container'>
        <section>
          <h1>Home of the best fades in San Diego.</h1>
          <TiArrowRightOutline className='landing-icon' />
        </section>
        <section>
          <h2>Get a fresh cut today so you will be ready for any occasion</h2>
          <p>
            With a haircut from SD Fade Shack you will be excited to show off
            your new look. Keep up with the latest and greatest hairstyles and
            schedule your next haircut today.{' '}
          </p>
          <p>
            Walkins welcome, but if you want a specific time or barber, use our
            online reservation system or book over the phone. We are the perfect
            place for group cuts as well if your crew wants to look fly for:
          </p>
          <ul>
            <li>Weddings</li>
            <li>Events</li>
            <li>Bachelor Parties</li>
          </ul>

          <CtaButton />
        </section>
      </div>
    </>
  )
}
