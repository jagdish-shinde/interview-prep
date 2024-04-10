import React, { useEffect, useState } from 'react'
import "./WorkItemRow.css"

function WorkItemRow({data,activityChecked}) {

  const [workItemChecked, setWorkItemChecked] = useState(activityChecked || false);

  useEffect(()=>{
    setWorkItemChecked(activityChecked)
  },[activityChecked])

  return (
    <div className='workItemRow'>
      <div>
        <input type="checkbox" checked={workItemChecked} onChange={()=>setWorkItemChecked(!workItemChecked)} />
        <span className='font-semibold'>{data.WorkItem}</span>
      </div>
      <div>
        <span className='font-semibold'>{data.Total}</span>
      </div>
    </div>
  )
}

export default WorkItemRow


