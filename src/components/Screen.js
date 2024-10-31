import React, { useEffect } from 'react'
import './Screen.css'

const Screen = ({limit, activeImg, setGalleryPage}) => {


  useEffect(() => {
    const ind = Math.floor(activeImg / limit);
    // console.log(ind);
    setGalleryPage(ind);
  }, [activeImg, limit, setGalleryPage]);

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
