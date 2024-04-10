import React, { useState } from 'react'
import "./ActivityRow.css"
import WorkItemRow from '../WorkItemRow/WorkItemRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus ,faMinus} from '@fortawesome/free-solid-svg-icons'; 

function ActivityRow({data}) {
   const[ischecked,setChecked] = useState(false);
   const [expandActivity,setexpandActivity] = useState(false)
   console.log(ischecked);
   function handlePlusIcon(){
    setexpandActivity(!expandActivity);
   }
  return (
    <div className='acitivityLayer'>
    <div className='acitivityRow'>
      <div>
        <input type="checkbox" checked={ischecked} onChange={()=>{setChecked(!ischecked)}}/>
        <span className='font-semibold'>{data.Activity}</span>
      </div>
      <div>
        <span className='font-semibold'>{data.Rate}</span>
      </div>
      <div>
        <span className='font-semibold'>{data.Total}</span>
      </div>
      {expandActivity?<FontAwesomeIcon icon={faMinus} size="xl" style={{color: "#63E6BE",}} onClick={handlePlusIcon} />: <FontAwesomeIcon icon={faPlus} size='xl' style={{color: "#63E6BE",}} onClick={handlePlusIcon}/>}
    </div>
    {data.workItemArr.map((workItem,index)=>(
        <WorkItemRow key={index} data = {workItem}/>
    ))}
    </div>
  )
}

export default ActivityRow
