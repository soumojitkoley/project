import React from 'react'
import './Phone.css'

const Phone = () => {
  return (
    <div className='phone-main-div'>
      <div className="phone-wrapper">
        <a href={`tel:${import.meta.env.VITE_PHONE_NUMBER}`}>
          <img src="/logo/telephone.png" alt="phone logo" />
        </a>
      </div>
    </div>
  )
}

export default Phone