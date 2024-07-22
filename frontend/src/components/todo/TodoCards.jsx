import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { GrDocumentUpdate } from "react-icons/gr";

const TodoCards = ({ title, body }) => {
  return (
    <div className="p-3 todo-card">
      <div>
        <h5>{title}</h5>
        <p className="todo-card-p">
          {body.length > 77 ? `${body.substring(0, 77)}...` : body}
        </p>
      </div>
      <div className="d-flex justify-content-around card-icon-head">
        <div className="d-flex justify-content-center align-items-center">
          <GrDocumentUpdate className="card-icons del" /> Update
        </div>
        <div className="d-flex justify-content-center align-items-center card-icon-head">
          <FaDeleteLeft className="card-icons " /> Delete
        </div>
      </div>
    </div>
  );
};

export default TodoCards;