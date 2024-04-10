import React, { useEffect, useState } from 'react'
import "./ActivityRow.css"
import WorkItemRow from '../WorkItemRow/WorkItemRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp,faChevronDown} from '@fortawesome/free-solid-svg-icons'; 

function ActivityRow({data,civilChecked}) {
   const[activityChecked,setAcitivityChecked] = useState(civilChecked || false);

   const [expandActivity,setexpandActivity] = useState(false)

   useEffect(() => {
    setAcitivityChecked(civilChecked);
}, [civilChecked]);

   function handlePlusIcon(){
    setexpandActivity(!expandActivity);
   }
  return (
    <div className='acitivityLayer'>
    <div className='acitivityRow'>
      <div>
        <input type="checkbox" checked={activityChecked} onChange={()=>{setAcitivityChecked(!activityChecked)}}/>
        <span className='font-semibold'>{data.Activity}</span>
      </div>
      <div>
        <span className='font-semibold'>{data.Rate}</span>
      </div>
      <div>
        <span className='font-semibold'>{data.Total}</span>
      </div>
      {expandActivity?(
                   <FontAwesomeIcon icon={faChevronUp} onClick={handlePlusIcon} />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} onClick={handlePlusIcon} />
                )}
    </div>
    {expandActivity && data.workItemArr.map((workItem,index)=>(
        <WorkItemRow key={index} data ={workItem} activityChecked={activityChecked}/>
    ))}
    </div>
  )
}

export default ActivityRow
