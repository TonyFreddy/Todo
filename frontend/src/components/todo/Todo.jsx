import React, { useState } from "react";
import TodoCards from "./TodoCards";
import "./todo.css";

const Todo = () => {
  const [Inputs, SetInputs] = useState({ title: "", body: "" });
  const [Array, setArray] = useState([]);

  const show = () => {
    document.getElementById("textarea").style.display = "block";
  };

  const change = (e) => {
    const { name, value } = e.target;
    SetInputs({ ...Inputs, [name]: value });
  };

  const submit = () => {
    setArray([...Array, Inputs]);
    SetInputs({ title: "", body: "" });
  };

  return (
    <div className="todo">
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
                <TodoCards title={item.title} body={item.body} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
