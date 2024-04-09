import Form from '../FormData/Form';
import './Overlay.css'; 

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';



const Overlay= ({setIsOverlayVisible,isOverlayVisible}) => {
 
  return (
    <div className={`overlay ${isOverlayVisible ? 'visible' : ''}`}>
      <div className="overlay-content">
        <div className='saveTopbar'>
        <h2 className='font-bold'>Workorder</h2>
        <FontAwesomeIcon  icon={faXmark}  onClick={()=>setIsOverlayVisible(false)} />
        </div>
       <Form setIsOverlayVisible={setIsOverlayVisible} isOverlayVisible={isOverlayVisible}/>
      </div>
    </div>
  );
};

export default Overlay;
