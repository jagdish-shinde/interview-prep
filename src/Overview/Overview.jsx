import "./Overview.css"
import Row from "./CivilRow/CivilRow"
import React, { useState } from 'react'
import {tabularData} from "../Overview/data"

function Overview() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="overviewLayer">
    <div className='tableHeader'>
      <div>
        <input type="checkbox" onChange={(e)=>{
          setChecked(e.target.checked);
        }} />
        <span className='font-semibold'>Packages</span>
      </div>
      <div>
        <span className='font-semibold'>Rate <span className="sqft">(in sqft)</span></span>
      </div>
      <div>
        <span className='font-semibold'>Total</span>
      </div>
      <div></div> 
    </div>
    {tabularData.map((data,index)=>(
      <Row key={index} data={data}/>
    ))}
    </div>
  )
}

export default Overview
