import { useState } from 'react';
import './App.css';
import Gallery from './components/Gallery';
import Screen from './components/Screen';

function App() {
  const [activeImg, setActiveImg] = useState(1);
  return (
    <div className="App">
        <Gallery limit={10} setActiveImg={setActiveImg}/>
        <Screen activeImg={activeImg}/>
    </div>
  );
}

export default App;
