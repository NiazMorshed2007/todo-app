import React from "react";

function TodoList(props) {
  const handleDlt = (id) => {
    props.setTodos(
      props.todos.filter((el, i) => {
        return i !== id;
      })
    );
  };

  const handleEditMode = () => {
    props.setEditMode(true);
  };
  return (
    <div className="todo-list-wrapper">
      {props.todos.map((e, i) => (
        <div className="row" key={i}>
          <div>
            <p>{e.text}</p>
          </div>
          <div>
            <button onClick={() => handleEditMode()}>Edit</button>
            <button onClick={() => handleDlt(i)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
