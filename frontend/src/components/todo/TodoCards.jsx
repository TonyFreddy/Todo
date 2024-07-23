import React, { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { GrDocumentUpdate } from "react-icons/gr";

const TodoCards = ({ title, body, id, delid, updateTask }) => {
  return (
    <div className="p-3 todo-card">
      <div>
        <h5>{title}</h5>
        <p className="todo-card-p">
          {body.length > 77 ? `${body.substring(0, 77)}...` : body}
        </p>
      </div>
      <div className="d-flex justify-content-around ">
        <div className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1" 
          onClick={updateTask}>
          <GrDocumentUpdate className="card-icons del" /> Update
        </div>
        <div className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1 text-danger" 
          onClick={() => {
            delid(id);
          }}>
          <FaDeleteLeft className="card-icons " /> Delete
        </div>
      </div>
    </div>
  );
};

export default TodoCards;
