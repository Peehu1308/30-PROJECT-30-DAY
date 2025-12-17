import './App.css'
import {useState} from 'react';

function App() {

  const [count,setcount]=useState(0);
  const [secondval,setsecondval]=useState("");
  const [firstval,setfirstval]=useState("");
  return (
    <>

      <div className='bg-gradient-to-b from-black to-blue-800 h-screen items-center flex justify-center flex-col text-white'>
        <p className='text-5xl italic bold m-5'>Basic Calculator</p>
        <div className='flex flex-row gap-5'>
          <p>
          Value:
        </p>
        <p>{count}</p>
        </div>
        <input type="text" className='text-black m-5 border-black rounded-xl px-4' placeholder='enter the 1st value' value={firstval} onChange={(e)=>setfirstval(e.target.value)}/>
        <input type="text" className='text-black m-5 border-black rounded-xl px-4' placeholder='enter the 2nd value ' value={secondval} onChange={(e)=>setsecondval(e.target.value)}/>
        <p>First Number : {firstval}</p>
        <p>Second Number : {secondval}</p>
      <div className='flex flex-row gap-5 mt-7 items-center'>
        <button className='p-2 bg-black text-white rounded-xl' onClick={()=>setcount(Number(firstval)+Number(secondval))}>Add</button>
      <button className='p-2 bg-black text-white rounded-xl' onClick={()=>setcount(Number(firstval)-Number(secondval))}>Subtract</button>
      <button className='p-2 bg-black text-white rounded-xl' onClick={()=>setcount(Number(firstval)*Number(secondval))}>Multiply</button>
      <button className='p-2 bg-black text-white rounded-xl' onClick={()=>setcount(Number(firstval)/Number(secondval))}>Divide</button>
      </div>
      </div>
    </>
  )
}

export default App
