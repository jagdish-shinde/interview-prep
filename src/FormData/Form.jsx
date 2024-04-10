import "../FormData/Form.css"

import { useState} from "react";

function Form({setIsOverlayVisible,isOverlayVisible}) {
  const [client, setclient] = useState("");
  const [commencement, setcommencement] = useState("");
  const [completion, setcompletion] = useState("");
  const [rfq, setrfq] = useState("");
  const handleClicker = (e) => {
    e.preventDefault();
    console.log(client);
    console.log(commencement);
    console.log(completion);
    console.log(rfq);
    setclient("");
    setcommencement("");
    setcompletion("");
    setrfq("")
    setTimeout(() => {
      setIsOverlayVisible(!isOverlayVisible)
    }, 700);
  };

  return (
      <div>
        <form onSubmit={handleClicker}>
          <div className="labelPlusInput">
          <label>Client</label>
          <select value={client} className="inputBox" onChange={(e)=>{
            setclient(e.target.value) 
          }}>
          <option hidden>Client</option>
          <option value="Client A">Client A</option>
          <option value="Client B">Client B</option>
          <option value="Client C">Client C</option>
          </select>
          </div>
          <div className="labelPlusInput">
          <label>Date of Commencement</label>
          <input
            type="text"
            placeholder="DD/MM/YYY"
            pattern="\d{2}/\d{2}/\d{4}"
            className="inputBox"
            value={commencement}
            onChange={(e) => setcommencement(e.target.value)}
          />
          </div>
          <div className="labelPlusInput">
          <label>Date of Completion</label>
          <input
            type="text"
            placeholder="DD/MM/YYY"
            pattern="\d{2}/\d{2}/\d{4}"
            className="inputBox"
            value={completion}
            onChange={(e) => setcompletion(e.target.value)}
          />
          </div>
          <div className="labelPlusInput">
          <label>RFQ Code</label>
          <input
            type="text"
            placeholder="RFQ Code"
            className="inputBox" 
            value={rfq}
            onChange={(e) => setrfq(e.target.value)}
          />
          </div>
          <button className="doneBtn">Done</button>
        </form>
      </div>
  );
}

export default Form;
