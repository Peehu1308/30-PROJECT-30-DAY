import './App.css'
import {useState} from 'react';

function App() {

  const [count,setcount]=useState(0);
  return (
    <>
      <div className='bg-gradient-to-b from-black to-blue-800 h-screen items-center flex justify-center flex-col'>

        <p>{count}</p>
      <button onClick={()=>setcount(count+1)}>add count</button>
      <button onClick={()=>setcount(count-1)}>subtract count</button>
      </div>
    </>
  )
}

export default App
