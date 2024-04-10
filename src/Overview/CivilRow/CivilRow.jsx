import React, { useState } from 'react'
import './CivilRow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus ,faMinus} from '@fortawesome/free-solid-svg-icons'; 
import ActivityRow from '../ActivityRow/ActivityRow';


function Row({data}) {
    const [packageChecked,setPackageChecked] = useState(false);
    const [expandCivil,setexpandCivil] = useState(false);
    const handlePlusIcon = (e)=>{
        setexpandCivil(!expandCivil);
    }
  return (
    <div className='civilLayer'>
    <div className='civilRow'>
      <div>
        <input type="checkbox" onChange={(e)=>{
          setPackageChecked(e.target.checked);
        }} />
        <span className='font-semibold'>{data.Package}</span>
      </div>
      <div>
        <span className='font-semibold'>{data.Rate}</span>
      </div>
      <div>
        <span className='font-semibold'>{data.Total}</span>
      </div>
      {expandCivil?<FontAwesomeIcon icon={faMinus} size="xl" style={{color: "#63E6BE",}} onClick={handlePlusIcon} />: <FontAwesomeIcon icon={faPlus} size='xl' style={{color: "#63E6BE",}} onClick={handlePlusIcon}/>}
    </div>


     {data.activityArr.map((data,index)=>(
      <ActivityRow key={index} data={data}  />
    ))}
    </div>
  )
}

export default Row
