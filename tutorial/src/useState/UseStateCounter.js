import {useState} from 'react'

export default function useStateCounter() {
    const [value,setValue] =useState(0)
    const reset = ()=>{
     setValue(0)
    }
   return (
     <div>
         <h2>regular Counter</h2>
         <h1>{value}</h1>
         <button onClick={()=>{
           setValue(pre=>pre-1)
         }}>decrease</button>
         <button onClick={reset}>reset</button>
         <button onClick={()=>{
           setValue(pre=>pre+1)
         }} >increase</button>
     </div>
   )
}
