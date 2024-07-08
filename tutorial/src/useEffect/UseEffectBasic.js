import React, { useEffect, useState } from 'react'

function UseEffectBasic() {
    const[value,setValue]=useState(0);
    useEffect(()=>{
        console.log('call useEffect');
    })
  return (
    <div>
        <h1>{value}</h1>
       <button onClick={()=> setValue(value+1)}>click me </button>
    </div>
  )
}

export default UseEffectBasic
