import HomePage from "../src/HomePage/HomePage";
import Overlay from "../src/Overlay/Overlay";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState} from "react";




function App() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  return (
    <>
      <div className="topBar">
        <div>
          <FontAwesomeIcon icon={faArrowLeft} className="my-1" />
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
