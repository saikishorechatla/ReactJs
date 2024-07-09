import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import {useCustom} from './useCustom'

function FetchData() {
    const [data,setData] =useState([])
      //  const {data,loading,error} =useCustom('https://api.github.com/users/1')
    useEffect(()=>{
      const getData = async() =>{
         let apiData =await  axios.get('https://api.github.com/users/1')
         await console.log(Object.values(apiData.data));
         setData(pre=>[apiData.data])
         
      }
      getData()
    },[])
    //  if(loading) return <h1>Please Wait Loading ...</h1>
    //  if(error)   return <h1>{error}</h1>
  return (
    <div>
      <table>
        <tbody>
           {
            data.map((val)=>{
              return  <tr>
                    <td>
                        {val.id}
                    </td>
                    <td>
                       { val.login}
                    </td>
                </tr>
            })
           }
        </tbody>
      </table>
    </div>
  )
}

export default FetchData
