import React, { useEffect, useState } from 'react';
export default function Cleaner() {
    const [val, setVal] = useState(window.innerWidth);
    const set = () => {
      setVal(window.innerWidth);
    };
    useEffect(() => {
      console.log('useEffect')
      window.addEventListener("resize", set);
      return ()=>{window.removeEventListener("resize" ,set)}
    });
    return (
      <div>
        <h1>{val}</h1>
      </div>
    );
  }