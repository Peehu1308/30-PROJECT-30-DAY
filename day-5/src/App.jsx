import './App.css'
import {useState} from 'react';

const images = [
  "https://images.pexels.com/photos/34663573/pexels-photo-34663573.jpeg",
  "https://images.pexels.com/photos/32838840/pexels-photo-32838840.jpeg",
  "https://images.pexels.com/photos/28271725/pexels-photo-28271725.jpeg"
];


function App() {
  const [imagestep,setimagestep]=useState(0);

  const nextimg=()=>{
    setimagestep((prev)=>(prev+1)%images.length);
  }

  const previmg=()=>{
    setimagestep((prev)=>(prev-1+images.length)%images.length);
  }

  return (
    <>
      <div className='bg-green-900 min-h-screen text-white justify-center items-center'>
      <img src={images[imagestep]} alt="image" height={300} width={300} />
      <button onClick={previmg}>prev img</button>
      <button onClick={nextimg}>next img</button>
      </div>
    </>
  )
}

export default App
