import React,{useState,useEffect,useCallback} from 'react'

export default function Counter(){

  const [count,setCount]=useState(0);

  const hndliincreament=()=>{

    for(let i=0;i<5;i++){ 
    setCount((preCount)=>preCount + i); 
    }
  }

  return(
    <>
    <div className='w-full flex'>
      <span className=''>{count}</span>
      <button onClick={hndliincreament}>
        increaments
      </button>
    </div>
    </>
  )
}