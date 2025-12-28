
import './App.css'
import {useState} from 'react'
import QRCode from 'react-qr-code'

function App() {
  const [text,settext]=useState("")

  return (
  <div className='bg-black min-h-screen'>
    <div className='bg-red-800'>
      <input type="text"
      placeholder='enter text or url ' 
      value={text}
      onChange={(e)=>settext(e.target.value)}/>
    </div>
    <div>
      {text && (
        <div>
          <QRCode value={text} size={300}/>
          </div>
      )}
    </div>
  </div>
  )
}

export default App
