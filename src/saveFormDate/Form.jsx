import "../saveFormDate/Form.css"
import { useState} from "react";

function Form() {
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
  };

  return (
      <div className="main">
        <form onSubmit={handleClicker}>
        <br/>
          <div className="labeplusinput">
          <label>Client</label>
          <br/>
          <select value={client} onChange={(e)=>{
            setclient(e.target.value)
          }}>
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
            type="date"
            required
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
            type="date"
            required
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
            required
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
