import { Circle, Cross, CrossIcon, UtensilsCrossedIcon } from 'lucide-react';
import React, { useEffect } from 'react'
import {useState} from 'react';

const Block = ({selected,onClick}) => {
    // const [val,setval]=useState("tic");
    // const [valid,setvalid]=useState(false);
    


  return (
    <div className='h-20 w-20 flex items-center justify-center' onClick={onClick}>
    {selected === "tic" ? <UtensilsCrossedIcon size={32}/> : selected === "toe" ? <Circle size={32}/> : null}
</div>

  )
}

export default Block