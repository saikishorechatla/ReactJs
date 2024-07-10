import React, { useState } from 'react'

const ControlledInputs=()=> {
    const [firstName ,setFirstName] = useState('')
    const [email,setEmail] =useState('')
    const [person,setPerson] = useState([])
    const handleName =(event)=>{
         setFirstName(event.target.value)
    }
    const handleEmail =(event)=>{
        setEmail(event.target.value)
   }
    const handleSubmit = (event)=>{
        event.preventDefault()
        if(firstName && email){
            const person ={id:new Date().getTime().toString(),firstName,email}
            setPerson (prev=>{ return [...prev ,person]})
            console.log('submit the form ')
        }
        else{
            console.log('empty values');
        }
    }
  return (
    <article>
       <form action="" onSubmit={(event)=>{
           handleSubmit(event)
       }}>
        <label htmlFor="firstName"> Name :</label>
         <input type = 'text' id="firstName" name = "firstName" value={firstName} onChange={(event)=>{handleName(event)}}/>
         <label htmlFor="email"> Email :</label>
         <input type = 'email' id="email" name = "email" value={email}   onChange={(event)=>{handleEmail(event)}}/>
         <button type = 'submit'>Submit</button>
       </form>
       {
        person.map((val)=>{
            const{ id,firstName,email}=val
            return <h1 key={id}>{firstName},{email}</h1>
        })
       }
    </article>
  )
}
export default ControlledInputs
