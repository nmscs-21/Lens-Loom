import React, { useEffect } from 'react'
import {ChevronLeft, ChevronRight } from 'lucide-react'
import './Screen.css'

const Screen = ({total, limit, activeImg, setActiveImg, setGalleryPage}) => {


  useEffect(() => {
    const ind = Math.floor(activeImg / limit);
    // console.log(ind);
    setGalleryPage(ind);
  }, [activeImg, limit, setGalleryPage]);

  return (
    <>
    <div className='app-body'>
      <button onClick={()=>{setActiveImg((curr)=>curr-1)}} disabled={activeImg === 1} tabIndex={0}>
      <ChevronLeft size={30}color={(activeImg === 1) ? 'grey' : 'white'}/>
      </button>
      <div className='screen'>
        <img
          src={`/resources/image${activeImg}.jpeg`} 
          alt={`Pic ${activeImg}`}
        /></div>
              <button onClick={()=>{setActiveImg((curr)=>curr+1)}} disabled={activeImg === total} tabIndex={0}>
      <ChevronRight size={30} color={(activeImg === total) ? 'grey' : 'white'}/>
      </button>
    </div></>
  )
}

export default Screen
