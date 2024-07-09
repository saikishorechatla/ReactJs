import { useEffect, useState } from "react";
import axios from "axios";
function useCustom (url)
{
    // variables the function returning
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error ,setError] = useState(null)

    useEffect(()=>{
        if(arguments.length===0)
            setError('No argument provided. Please pass EndPoint URL as argument for Fetching Data')
        else
            try{
                // self invoke
                (async()=>{
                    let res = await axios.get(url)
                    res = res.data
                    if(Array.isArray(res))
                    {
                        setData(res)
                        setLoading(false)
                    }
                    else
                    {
                        setData([res])
                        setLoading(false)
                    }
                })()
            }
            catch(e){
                 setError(e.message)
                 setLoading(false)
            }    
    } ,[url])
   
    return {data,loading,error}
}

export {useCustom}