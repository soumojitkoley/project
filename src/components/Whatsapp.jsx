import React from 'react'
import './Whatsapp.css'

const Whatsapp = () => {
  return (
    <div className='wp-main-div'>
      <div className="wp-wrapper">
        <a href={`https://wa.me/${import.meta.env.VITE_PHONE_NUMBER}`} target='_blank'>
          <img src="/logo/whatsapp.png" alt="wp logo" />
        </a>
      </div>
    </div>
  )
}

export default Whatsapp