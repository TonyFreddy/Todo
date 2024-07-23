import React, { useState } from "react";
import TodoCards from "./TodoCards";
import "./todo.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./Update";

let id = sessionStorage.getItem("id");

const Todo = () => {
  const [Inputs, SetInputs] = useState({ title: "", body: "" });
  const [Array, setArray] = useState([]);
  const [display, setDisplay] = useState("none"); // Ajout de l'état display
  const [currentTask, setCurrentTask] = useState(null); // Ajout de l'état pour la tâche actuelle

  const show = () => {
    document.getElementById("textarea").style.display = "block";
  };

  const change = (e) => {
    const { name, value } = e.target;
    SetInputs({ ...Inputs, [name]: value });
  };

  const submit = () => {
    if (Inputs.title === "" || Inputs.body === "") {
      toast.error("Title or Body Should Not Be Empty");
    } else {
      setArray([...Array, Inputs]);
      SetInputs({ title: "", body: "" });
      toast.success("Your Task Is Added");
      toast.error("Your Task Is Not Saved! Please SignUp");
    }
  };

  const del = (id) => {
    Array.splice(id, "1");
    setArray([...Array]);
  };

  const dis = (value) => {
    setDisplay(value);
  };

  const updateTask = (task) => {
    setCurrentTask(task);
    setDisplay("block");
  };

  return (
    <>
      <div className="todo">
        <ToastContainer />
        <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column">
          <div className="d-flex flex-column w-50 p-1 todo-inputs-div">
            <input
              type="text"
              placeholder="TITLE"
              onClick={show}
              name="title"
              value={Inputs.title}
              onChange={change}
              className="my-2 p-2 todo-inputs"
            />
            <textarea
              id="textarea"
              placeholder="BODY"
              name="body"
              value={Inputs.body}
              onChange={change}
              className="p-2 todo-inputs"
            />
          </div>
          <div className="w-50 d-flex justify-content-end my-3">
            <button className="home-btn px-2 py-1" onClick={submit}>
              Add
            </button>
          </div>
        </div>
        <div className="todo-body">
          <div className="container-fluid">
            <div className="row">
              {Array.map((item, index) => (
                <div className="col-lg-3 col-10 mx-5 my-2" key={index}>
                  <TodoCards 
                    title={item.title} 
                    body={item.body} 
                    id={index} 
                    delid={del}
                    updateTask={() => updateTask(item)} // Passe la tâche à mettre à jour
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="todo-update" id="todo-update" style={{ display }}>
        <div className="container">
          <Update display={dis} task={currentTask} />
        </div>
      </div>
    </>
  );
};

export default Todo;
