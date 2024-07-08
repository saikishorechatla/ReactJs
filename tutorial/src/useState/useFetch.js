import  { useEffect, useState } from 'react'

function useFetch(arg)
{
    const [data , setData] = useState([]);
   
useEffect(()=>  {
    const getData = async ()=>{
        try{
            let data = await fetch(arg);
            data = await data.json();
            setData(data)
            return ;
        }catch(e)
        {
            setData(e.message)
             return ;
        }
    }
    getData()
},[arg])
    return {data}
}

export {useFetch};

