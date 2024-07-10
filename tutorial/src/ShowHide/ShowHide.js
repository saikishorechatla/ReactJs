import React, { useEffect, useState } from 'react'

const Item =()=>{
const [size,setSize] = useState(window.innerWidth);
const  check = ()=>{
    setSize(window.innerWidth)
}
useEffect(()=>{
    window.addEventListener('resize',check)

    return window.removeEventListener('resize',check)
})
    return (
        <div>
            <h1>window</h1>
            <h2>{size}</h2>
        </div>
    )
}

function ShowHide() {
    const [show,setShow]=useState(false)
  return (
    <div>
         <button onClick={()=>{setShow(!show)}}>show/hide</button>
         {show && <Item/>}
    </div>
  )
}

export default ShowHide

