import React, { useContext, useState } from "react";
import {Ccontext} from './Provider';
export default function View() {
    const {data}=useContext(Ccontext);
    // const [dat,setData] =useState(data)
    console.log(data);
  return (
  <div>
    {
        data &&
        (
            data.map((obj,i)=>(
                <div key={i}>{obj}</div>
            ))
        )
    }
  </div>
  );
}
