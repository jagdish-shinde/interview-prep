import "../FormData/Form.css"

import { useState} from "react";

function Form({setIsOverlayVisible,isOverlayVisible}) {
  const [client, setClient] = useState("");
  const [commencement, setCommencement] = useState("");
  const [completion, setCompletion] = useState("");
  const [rfq, setRfq] = useState("");
  const handleClicker = (e) => {
    e.preventDefault();
    if(!handleDataFormat(commencement) || !handleDataFormat(completion)){
      setCommencement("");
      setCompletion("")
      alert("Enter Valid Data");
      return;
    }
    console.log(client);
    console.log(commencement);
    console.log(completion);
    console.log(rfq);
    setClient("");
    setCommencement("");
    setCompletion("");
    setRfq("")
    setTimeout(() => {
      setIsOverlayVisible(!isOverlayVisible)
    }, 500);
  };

  function handleDataFormat(date){
    const regexddmmyyyy = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
    if (regexddmmyyyy.test(date)) {
      return true;
    } 
    return false;
  }

  return (
      <div>
        <form onSubmit={handleClicker}>
          <div className="labelPlusInput">
          <label>Client</label>
          <select value={client} className="inputBox" onChange={(e)=>{
            setClient(e.target.value) 
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
            onChange={(e) => setCommencement(e.target.value)}
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
            onChange={(e) => setCompletion(e.target.value)}
          />
          </div>
          <div className="labelPlusInput">
          <label>RFQ Code</label>
          <input
            type="text"
            placeholder="RFQ Code"
            className="inputBox" 
            value={rfq}
            onChange={(e) => setRfq(e.target.value)}
          />
          </div>
          <button className="doneBtn">Done</button>
        </form>
      </div>
  );
}

export default Form;
