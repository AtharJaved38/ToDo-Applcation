import axios from "axios";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { baseURL } from "../utils/constant";

const ToDo = ({ text, id, setUpdateUI, setShowPopup, setPrevTask }) => {
  const deleteToDo = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res.data);
      setUpdateUI((prevState) => !prevState);
    });
  };

  const updatePopup = () => {
    setPrevTask({text, id})
    setShowPopup(true)
  }

  return (
    <div className="todo">
      <div className="text">{text}</div>
      
      <div className="icons">
        <FaEdit className="icon" onClick={updatePopup} />
        <RiDeleteBin6Fill className="icon" onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDo;
