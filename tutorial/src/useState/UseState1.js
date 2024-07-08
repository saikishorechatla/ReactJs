import { React, useState } from 'react';


const UseState1 = ()=>{
    // console.log(useState('hello world'));
    // const value = useState(1)[0]
    // const handler = useState(1)[1]
    // console.log( handler);
    const [ text ,setText] = useState('random title')
    const handleClick = ()=>
    {
       if(text === 'random title') setText('hello world')
        else setText('random title')
    }
       return (
        <>
        <h2> UseState Example{text}</h2>
        <button className='btn' onClick={handleClick}>click to change <title></title></button>
        </>
       )
  }

  
  export default UseState1;