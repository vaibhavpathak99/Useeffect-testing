
// Q.1)what is useEffect?
// Ans:useEffect is reacthook it is allow to perfrom 
// sideefect in your react Component
// for example side effect means directly 
// updating a data for dom..

import React, {  useEffect, useState } from 'react'

function Useefctinreact() {
 const[count,setCount] = useState(0)
 useEffect(()=>{
    setTimeout(()=>{
        setCount((count)=> count + 1)
    },1000)
 },[])
  return (
    <div>
       <p>count {count}data</p>
    </div>
  )
}

export default Useefctinreact