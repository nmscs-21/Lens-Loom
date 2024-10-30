import React from 'react'
import './Gallery.css'

const Gallery = ({limit, setActiveImg}) => {
  
    const imageList = Array.from({ length: limit }, (_, i) => i + 1);

  return (
    <div className='gallery'>
        {imageList.map(i => (
            <div key={i} onClick={()=>{ 
                console.log(i);
                setActiveImg(i)}}>
        <img
          src={`/resources/image${i}.jpeg`} 
          alt={`Pic ${i}`}
          
        /></div>
      ))}
    </div>
  )
}

export default Gallery
