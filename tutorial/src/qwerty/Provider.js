import React,{createContext,useState,useEffect} from 'react';
import View from './View';
const Ccontext=createContext();
function Provider() {
    const [data,setData]=useState([]);
  
    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=20')
        .then(res=>res.json())
        .then(resd=>{
            setData(...data,resd.results);
            console.log("resd.results",data);
        })
    },[])
   
  return (
    <div>
      <Ccontext.Provider value={data}>
        <View/>
      </Ccontext.Provider>
    </div>
  )
}

export {Ccontext,Provider};