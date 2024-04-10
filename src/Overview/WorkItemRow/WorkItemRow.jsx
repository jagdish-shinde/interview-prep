import React, { useState } from 'react'

import "./WorkItemRow.css"

function WorkItemRow({data}) {
  return (
    <div className='workItemRow'>
      <div>
        <input type="checkbox" />
        <span className='font-semibold'>{data.WorkItem}</span>
      </div>
      <div>
        <span className='font-semibold'>{data.Total}</span>
      </div>
    </div>
  )
}

export default WorkItemRow


