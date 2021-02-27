import React from 'react'
import '../stylesheets/button.css'

export const CtaButton = () => {
  return (
    <button className='cta-button'>
      <div className='button-text'> Reserve Now </div>
      <div className='arrow-container'>
        <div className='html-arrow'>&#8250;</div>
      </div>
    </button>
  )
}
