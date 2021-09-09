import React from "react";

function TodoList({ todos, setTodos, openModal }) {
  const handleDelete = (id) => {
    console.log(id);
    todos.splice(id, 1);
    setTodos([...todos]);
  };
  return (
    <div className="todo-list-wrapper">
      {todos.map((e, i) => (
        <div className="row" key={i}>
          <div>
            <p>{e.text}</p>
          </div>
          <div>
            <button onClick={() => openModal(true)}>Edit</button>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
