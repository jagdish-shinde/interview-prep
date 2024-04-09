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
      <div className="main">
        <form onSubmit={handleClicker}>
        <br/>
          <div className="labeplusinput">
          <label>Client</label>
          <br/>
          {/* <input  className="inp" placeholder="Client" value={client}></input> */}
          <select value={client} className="inp" onChange={(e)=>{
            setclient(e.target.value) 
          }}>
          <option hidden>Client</option>
          <option value="Client A">Client A</option>
          <option value="Client B">Client B</option>
          <option value="Client C">Client C</option>
          </select>
          </div>
          <br/>
          <div className="labeplusinput">
          <label>Date of Commencement</label>
          <br/>
          <input
            type="text"
            placeholder="DD/MM/YYY"
            className="inp"
            value={commencement}
            onChange={(e) => setcommencement(e.target.value)}
          />
          </div>
          <br/>
          <div className="labeplusinput">
          <label>Date of Completion</label>
          <br/>
          <input
            type="text"
            placeholder="DD/MM/YYY"
            className="inp"
            value={completion}
            onChange={(e) => setcompletion(e.target.value)}
          />
          </div>
          <br/>
          <div className="labeplusinput">
          <label>RFQ Code</label>
          <br/>
          <input
            type="text"
            placeholder="RFQ Code"
            className="inp" 
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
