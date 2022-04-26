import React from "react";
import "./ToDoItem.style.css";

const ToDoItem = ({ todo }) => {
  return (
    <React.Fragment>
      <div className="todo flex align-items-center gap-small">
        <input type="checkbox" />
        {todo}
      </div>
    </React.Fragment>
  );
};

export default ToDoItem;