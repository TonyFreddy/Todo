import React, { useState, useEffect } from 'react';

const Update = ({ display, task }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setBody(task.body);
    }
  }, [task]);

  return (
    <div className="p-5 d-flex justify-content-center align-items-start flex-column update">
      <h3>Update Your Task</h3>
      <input 
        type="text" 
        className="todo-inputs w-100 p-3" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea 
        className="todo-inputs w-100 p-3" 
        value={body} 
        onChange={(e) => setBody(e.target.value)}
      />
      <div>
        <button className="btn btn-dark my-4">UPDATE</button>
        <button 
          className="btn btn-danger my-4 mx-3" 
          onClick={() => display("none")}>
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default Update;
