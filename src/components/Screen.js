import React from 'react'
import './Screen.css'

const Screen = ({activeImg}) => {
  return (
    <div className='screen'>
        <img
          src={`/resources/image${activeImg}.jpeg`} 
          alt={`Pic ${activeImg}`}
        />
    </div>
  )
}

export default Screen
