import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { error } from 'ajv/dist/vocabularies/applicator/dependencies';

const CustomReactHook = (str)=>{
    const [loading , setLoading] = useState(true)
    const [data, setData] = useState([])
    const [error ,setError] =useState('')

    const fA = async(str)=>{
        try{
        const res =await axios.get(str)
        if(res){
          console.log(res)
          setData(res.data.results)
          setLoading(false)
        }
    }catch(error){
            setError(error.message)
            setLoading(true)
        }
    }
    
    useEffect(()=>{
      fA(str)
    } ,[str])
    return {loading , data , error}

}




function DataAPI() {
    console.log( CustomReactHook('https://randomuser.me/api/?results=20'))
    
  return (
    <div>
      
    </div>
  )
}

export default DataAPI
