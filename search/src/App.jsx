import { useState } from 'react'
import './App.css'
import {X,Search} from 'lucide-react'

function App({onsearch}) {
  const [query,setquery]=useState('');

  const handlesearch=(e)=>{
    e.preventDefault();
    if(query.trim()){
      onsearch(query);
    }
  };

  return (
    <form onSubmit={handlesearch} className='relative flex items-center w-full max-w-xl mx-auto mt-10'>
      <div className='absolute left-4 text-gray-800'>
        <Search size={20}/>
      </div>

      <input type="text" value={query} onChange={(e)=>setquery(e.target.value)}
      placeholder='Search...'
      className='w-full py-3 pl-12 pr-12 text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm' />
      {query && (
        <button type="button" onClick={()=>setquery('')}
        className='absolute right-24 text-gray-900'>
          <X/>
        </button>
      )}
    </form>
  )
}

export default App
