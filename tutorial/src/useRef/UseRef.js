import React, { useEffect, useRef } from 'react'

const UseRef = () => {

    const refContainer =useRef(null)
    const divContainer =useRef(null)
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(refContainer.current.value)
        console.log(divContainer.current)
    }
    console.log(refContainer)
    useEffect(()=>{
        console.log("useEffect")
        console.log(refContainer.current);
        refContainer.current.focus();
    },[])

  return (
    <>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <input type="text" ref={refContainer}/>
                <button type="submit">submit</button>
            </div>
        </form>
        <div ref={divContainer}>hello World</div>
    </>
  )
}

export default UseRef
