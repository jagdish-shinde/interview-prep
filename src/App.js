import HomePage from "../src/HomePage/HomePage";
import Overlay from "../src/Overlay/Overlay";
import "./App.css";
import {Toaster} from 'react-hot-toast';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import { useState} from "react";


function App() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  return (
    <>
    <div>
    <Toaster position="top-center" reverseOrder={false}/>
    </div>
      <div className="topBar">
        <div>
          <FontAwesomeIcon icon={faChevronLeft} className="cursor-pointer ..." />
          <span className="font-bold text-2xl mx-3">Create Workorder</span>
        </div>
        <button
         className="saveBtn" onClick={()=>{
          setIsOverlayVisible(true)
         }}
        >
          Save
        </button>
       <Overlay setIsOverlayVisible={setIsOverlayVisible} isOverlayVisible={isOverlayVisible}/>
      </div>
      <HomePage />
    </>
  );
}

export default App;
