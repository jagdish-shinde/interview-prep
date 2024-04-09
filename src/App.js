import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import HomePage from "../src/HomePage/HomePage";
import Saveform from "../src/SaveForm/Saveform";
import { useState} from "react";


function App() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };


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
      {isOverlayVisible && <Saveform setIsOverlayVisible={setIsOverlayVisible} isOverlayVisible={isOverlayVisible}/>}
      </div>
      <HomePage />
    </>
  );
}

export default App;
