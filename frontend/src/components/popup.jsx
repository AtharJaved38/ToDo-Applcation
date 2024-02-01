import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { baseURL } from "../utils/constant";

const Popup = ({ setShowPopup, prevTask, setUpdateUI }) => {
  const [input, setInput] = useState(prevTask.text);

  const hidePopup = () => {
    setShowPopup(false);
  };

  const updateTask = () => {
    axios.put(`${baseURL}/update/${prevTask.id}`, {ToDo: input}).then((res)=>{
        console.log(res.data);
        setUpdateUI((prevState) =>!prevState);
        setShowPopup(false);
    })
  };

  return (
    <div className="backdrop">
      <div className="popup">
        <RxCross1 className="cross" onClick={hidePopup} />
        <h1>Update Task</h1>
        <div className="popup__input_holder">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Update task..."
          />
          <button onClick={updateTask} className="btn-update">Update</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
