import './App.css'
import {useState} from 'react';

function App() {
  const [color,setcolor]=useState('#6d5dfc');
  const generateRandomColor=()=>{
    const randomcolor=`#${Math.floor(Math.random()*16777215).toString(16).padStart(6,'0')}`;
    setcolor(randomcolor);
  };

  return (
    <div style={{
      background:color,
      height:'100vh',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      transition:'background 0.5s ease',
    }}>
      <h1 className='bg-[#fff]'>
        color:{color}
      </h1>
      <button 
      onClick={generateRandomColor}
      style={{
        padding: '10px 20px',
          fontSize: '1.2rem',
          cursor: 'pointer',
          borderRadius: '8px',
          border: 'none'
      }}>
        generate new color
      </button>
    </div>
  )
}

export default App
