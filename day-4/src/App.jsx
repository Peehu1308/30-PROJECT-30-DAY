import { useState } from 'react'
import reactlogo from "./assets/react.svg"
import './App.css'

function App() {
  const[openbox,setopenbox]=useState(false);
  const [showimage,setshowimage]=useState(false);

  return (
    <>
      <div className=''>
      <button onClick={()=>setopenbox(true)}>open box</button>
      {
        openbox && <div>
          <h1>This is a box</h1>
          <button onClick={()=>setopenbox(false)}>close box</button>
          </div>
      }
      </div>

      <div>
        <button onClick={()=>setshowimage(true)}>show image</button>
        {
          showimage && <div className='flex flex-col'>
            <img src={reactlogo}/>
            <button onClick={()=>setshowimage(false)}>hide image</button>
            </div>

        }
      </div>

    </>
  )
}

export default App
