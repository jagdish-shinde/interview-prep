import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; 

import Form from '../FormData/Form';
import './Overlay.css';

function Overlay({ setIsOverlayVisible, isOverlayVisible }){
  return (
    <div className={`overlay ${isOverlayVisible ? 'visible' : ''}`}>
      <div className={`overlay-content ${isOverlayVisible ? '' : 'overlay-off'}`}>
        <div className='formTopbar'>
          <h2 className='font-bold'>Workorder</h2>
          <FontAwesomeIcon icon={faTimes} onClick={() => setIsOverlayVisible(false)} />
        </div>
        <Form setIsOverlayVisible={setIsOverlayVisible} isOverlayVisible={isOverlayVisible} />
      </div>
    </div>
  );
};

export default Overlay;

