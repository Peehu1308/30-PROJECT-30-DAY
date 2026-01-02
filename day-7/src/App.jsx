import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [theme,settheme]=useState("light");

  useEffect(()=>{
    document.documentElement.setAttribute("dark-theme",theme)
  },[theme])

  return (
    <div className='flex justify-center items-center h-screen'>
      <button className='bg-white border border-4 border-black text-black rounded-xl p-4'
      onClick={()=>settheme('light')}>
        Light

      </button>

      <button className='bg-black border border-4 border-white text-white rounded-xl p-4'
      onClick={()=>settheme('dark')}>
        Dark

      </button>
      
    </div>
  )
}

export default App
