import React, { useState } from 'react'

const UseStateObject = ()=>{
   const [person , setPerson] = useState({
    name:'peter',
    age: 24,
    message: 'random message'
   })
   const changeMessage=()=>{
       setPerson('hello world')
   }
   return (
    <>
    <h1>{person.name}</h1>
    <h1>{person.age}</h1>
    <h1>{person.message}</h1>
    <button onClick={changeMessage}>change Message</button>
    </>
   )
    
}

export default UseStateObject;