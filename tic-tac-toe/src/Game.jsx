import React, { useEffect } from 'react'
import {useState} from 'react'
import Block from './Block';


const Game = () => {
    const [turn,setturn]=useState(false)
    const [board, setBoard] = useState(Array(9).fill(null));


    // const blocks=Array.from({length:9},(_,i)=>i+1);
    const handleClick=(index)=>{
        if(board[index]!==null)return;
        const newBoard=[...board];
        newBoard[index]=turn?"tic":"toe";
        setBoard(newBoard);
        setturn(!turn);

    }    

  return (
    <div className=' border border-2 border-white p-4 rounded-xl mx-auto text-white'>
        <div className='grid grid-cols-3 grid-rows-3 gap-1 divide-x divide-y border-white'>
    {board.map((value, index) => (
        <Block key={index} selected={value} onClick={() => handleClick(index)} />
    ))}
</div>

    </div>
  )
}

export default Game