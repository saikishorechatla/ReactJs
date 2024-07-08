import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FetchData() {
    const [data,setData] =useState([])
    useEffect(()=>{
      const getData = async() =>{
         let apiData =await  axios.get('https://api.github.com/users/1')
         await console.log(Object.values(apiData.data));
         setData(pre=>[apiData.data])
         
      }
      getData()
    },[])
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
