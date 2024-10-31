import React, { useEffect, useRef } from 'react'
import './Gallery.css'
import {ChevronLeft, ChevronRight } from 'lucide-react'

const Gallery = ({total, limit, activeImg, setActiveImg, galleryPage, setGalleryPage}) => {
    const imageList = Array.from({ length: total }, (_, i) => i + 1);
    const THUMBNAILS_PER_PAGE = limit;
    // console.log('Thumbnails per page ', limit);

    const totalPages = Math.ceil(imageList.length / THUMBNAILS_PER_PAGE);

    const getCurrentThumbnails = ()=>{  
      const startIdx = galleryPage*THUMBNAILS_PER_PAGE;
      // console.log('startIdx',startIdx);
      
      const remainingImages = total - startIdx;
      // console.log('remainingImages', remainingImages);
      

      if(remainingImages >= THUMBNAILS_PER_PAGE){
        // console.log('CurrentThumbnails',imageList.slice(startIdx, startIdx + THUMBNAILS_PER_PAGE) );
        return imageList.slice(startIdx, startIdx + THUMBNAILS_PER_PAGE);
      }else{
        const neededFromPrevious = THUMBNAILS_PER_PAGE - remainingImages;
        // console.log('needed from prev', neededFromPrevious);
        
        const previousImages = imageList.slice(startIdx-neededFromPrevious, startIdx);
        // console.log('Previous Images',imageList.slice(startIdx-neededFromPrevious, startIdx) );
        const newImages = imageList.slice(startIdx);
        // console.log(imageList);
        
        // console.log('New Images',imageList.slice(startIdx));
        // console.log('CurrentThumbnails',[...previousImages, ...newImages] );
        return [...previousImages, ...newImages];
      }
    }

    const currentThumbnails = getCurrentThumbnails();
    
    const nextGalleryPage = () => {
      // console.log('Navigate to next page');
      setGalleryPage((prev) => Math.min(prev + 1, totalPages - 1));
      // console.log('currentPage', galleryPage);
      
    };
  
    const prevGalleryPage = () => {
      // console.log('Navigate to next page');
      setGalleryPage((prev) => Math.max(prev - 1, 0));
      // console.log('Prev page', galleryPage);
    };
    
    const handleKeyNav = (event)=>{
      if(event.key === 'ArrowRight'){
        if(activeImg !== total){
          console.log('trying');
          setActiveImg((curr)=>curr+1);
        }
      } else if(event.key === 'ArrowLeft'){
        if(activeImg !== 1){
          setActiveImg((curr)=>curr-1);
        }
      }
    }

    const screenRef = useRef(null);

    // Set focus to the `div` when the component mounts, only if the ref is available
    useEffect(() => {
      if (screenRef.current) {
        screenRef.current.focus();
      }
    }, []);

    return (
    <>
    <div className='gallery'>
    <button onClick={prevGalleryPage} disabled={galleryPage === 0} tabIndex={0}>
    <ChevronLeft size={20} color={(galleryPage === 0) ? 'grey' : 'white'}/>
    </button>
    <div 
      className='gallery'
      tabIndex="0"
      onKeyDown={handleKeyNav}
      ref={screenRef}
    >
        {currentThumbnails.map(i => (
            <div key={i} onClick={()=>{ 
                // console.log(i);
                setActiveImg(i)}}
                className={i === activeImg ? `current-active` : ``}
            >
        <img
          src={`/resources/image${i}.jpeg`} 
          alt={`Pic ${i}`}
          
        /></div>
      ))}    
      </div>    
      <button onClick={nextGalleryPage} disabled={galleryPage >= totalPages - 1} tabIndex={0}>
      <ChevronRight  size={20} color={(galleryPage >= totalPages - 1) ? 'grey' : 'white'}/>
      </button>
      
    </div>
    </>
  )
}

export default Gallery
