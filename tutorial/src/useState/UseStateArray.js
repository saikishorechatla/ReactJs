import React, { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

export default function UseStateArray() {
  const [people, setPeople] = useState([]);
  const  [value, setValue] =useState(0)
  const { data } = useFetch('https://jsonplaceholder.typicode.com/todos'); 
  let int = 0

  useEffect(() => {
    if (data) { 
      setPeople(data);
    }
  }, [data]);
   
  const handle =()=>{
   int = setInterval(() => {
      setValue(pre=>pre+1)
    }, 1000);
  }
  const handleStop =()=>{
    
        clearInterval(int)

  }

  return (
    <div>
      <h1>{value}</h1>
    <button onClick={handle}>Start</button>
    <button onClick={handleStop}>Stop</button>
      <table>
        <tbody>
          {people.map((val, index) => (
            <tr key={index}> 
              <td>{val.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
