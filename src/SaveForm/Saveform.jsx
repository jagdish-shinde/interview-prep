import React, { useState } from 'react';
import './Saveform.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Form from '../saveFormDate/Form';
const Saveform= ({setIsOverlayVisible,isOverlayVisible}) => {
 
  return (
    <div className={`overlay ${isOverlayVisible ? 'visible' : ''}`}>
      <div className="overlay-content">
        <div className='saveTopbar'>
        <h2 className='font-bold'>Workorder</h2>
        <FontAwesomeIcon  icon={faXmark}  onClick={()=>setIsOverlayVisible(false)} />
        </div>
       <Form/>
      </div>
    </div>
  );
};

export default Saveform;
