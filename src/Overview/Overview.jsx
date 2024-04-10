import "./Overview.css"
import Row from "./CivilRow/CivilRow"
import React, { useState } from 'react'
import {tabularData} from "../Overview/data"

function Overview() {
  const [packageChecked, setPackageChecked] = useState(false);
  return (
    <div className="overviewLayer">
    <div className='tableHeader'>
      <div>
        <input type="checkbox" checked={packageChecked} onChange={(e)=>{
          setPackageChecked(e.target.checked);
        }} />
        <span className='font-semibold'>Packages</span>
      </div>
      <div>
        <span className='font-semibold'>Rate <em className="sqft">(in sqft)</em></span>
      </div>
      <div>
        <span className='font-semibold'>Total</span>
      </div>
      <div></div> 
    </div>
    {tabularData.map((data,index)=>(
      <Row key={index} data={data} packageChecked={packageChecked}/>
    ))}
    </div>
  )
}

export default Overview
