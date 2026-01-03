import React, { useEffect } from 'react'
import {useState} from 'react'
import Block from './Block';


const Game = () => {
    const [turn,setturn]=useState(false)
    const [board, setBoard] = useState(Array(9).fill(null));
    const winningpattern=[
        [0, 1, 2], // row 1
  [3, 4, 5], // row 2
  [6, 7, 8], // row 3
  [0, 3, 6], // column 1
  [1, 4, 7], // column 2
  [2, 5, 8], // column 3
  [0, 4, 8], // diagonal
  [2, 4, 6],
    ];

    const checkwinning=(board)=>{
        for(let pattern of winningpattern){
            const [a,b,c]=pattern;
        

        if(board[a]==board[b] && 
            board[a]==board[c]
        ){
            return board[a];
        }
    
    }
    return null;
    }
    const [winner,setwinner]=useState(null);


    // const blocks=Array.from({length:9},(_,i)=>i+1);
    const handleClick=(index)=>{
        if(board[index]!==null)return;
        const newBoard=[...board];
        newBoard[index]=turn?"tic":"toe";
        setBoard(newBoard);

        const win=checkwinning(newBoard);
        if(win){
            setwinner(win);
        }
        setturn(!turn);

    }    
    const reset=()=>{
        // const newBoard=[...board];
        setBoard(Array(9).fill(null));
        setturn(false);
    }

  return (
    <div className=' border border-2 border-white p-4 rounded-xl mx-auto text-white'>
        <div className='grid grid-cols-3 grid-rows-3 gap-1 divide-x divide-y border-white'>
    {board.map((value, index) => (
        <Block key={index} selected={value} onClick={() => handleClick(index)} />
    ))}

    {winner && (
  <p className="mt-4 text-xl font-bold text-green-400">
    {winner === "tic" ? "❌ wins!" : "⭕ wins!"}
  </p>
)}

<button className='text-white' onClick={reset}>Reset</button>

</div>

    </div>
  )
}

export default Game