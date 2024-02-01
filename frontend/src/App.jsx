import React, { useEffect, useState } from "react";
import ToDo from "./components/todo";
import axios from "axios";
import { baseURL } from "./utils/constant";
import Popup from "./components/popup";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [updateUI, setUpdateUI] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [prevTask, setPrevTask] = useState({});

  useEffect(() => {
    axios
      .get(`${baseURL}/get`)
      .then((response) => {
        console.log(setTodos(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [updateUI]);

  const saveToDo = () => {
    axios
      .post(`${baseURL}/save`, { ToDo: input })
      .then((response) => {
        console.log(response.data);
        setUpdateUI((prevState) => !prevState);
        setInput("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main>
      <div className="container">
        <h1 className="title">ToDo App</h1>

        <div className="input_holder">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Add task..."
          />
          <button onClick={saveToDo}>Add</button>
        </div>
      </div>
        <div className="list">
          {todos.map((el) => (
            <ToDo
              key={el._id}
              text={el.ToDo}
              id={el._id}
              setUpdateUI={setUpdateUI}
              setShowPopup={setShowPopup}
              setPrevTask={setPrevTask}
            />
          ))}
        </div>
      {showPopup && <Popup setShowPopup={setShowPopup} prevTask={prevTask} setUpdateUI={setUpdateUI} />}
    </main>
  );
};

export default App;
