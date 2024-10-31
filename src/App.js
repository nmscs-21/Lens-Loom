import { useEffect, useState } from 'react';
import './App.css';
import Gallery from './components/Gallery';
import Screen from './components/Screen';

function App() {
  const [activeImg, setActiveImg] = useState(1);
  const [galleryPage, setGalleryPage] = useState(0);
  const [limit, setLimit] = useState(getLimit()); // Initialize with a function

  function getLimit() {
    const galleryWidth = Math.min(window.innerWidth * 0.9, window.innerWidth); // 90vw max
    const imageWidth = 65 + 4 + 4; // Image width + padding (2px*2) + margin (2px*2)
    return Math.floor(galleryWidth / imageWidth); // Max images that fit within gallery width
  }


    useEffect(() => {
        function handleResize() {
            setLimit(getLimit());
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <div className="App">
        <h1>Responsive Gallery</h1>
        <Gallery total={10} limit={limit} activeImg={activeImg} setActiveImg={setActiveImg} galleryPage={galleryPage} setGalleryPage={setGalleryPage}/>
        <Screen total={10} limit={limit} activeImg={activeImg}  setActiveImg={setActiveImg} setGalleryPage={setGalleryPage}/>
    </div>
  );
}

export default App;
