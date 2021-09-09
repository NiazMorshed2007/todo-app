import React from "react";

function TodoList({ todos, setTodos, setInput, setEditMode }) {
  const handleDelete = (id) => {
    if (todos.id === id) {
      return;
    }
    todos.splice(todos.id, 1);
    setTodos([...todos]);
  };

  const handelValue = (e) => {
    if (todos.id === e.id) {
      return;
    }
    setInput(e.text);
  };

  return (
    <div className="todo-list-wrapper">
      {todos.map((e) => (
        <div className="row" key={e.id}>
          <div>
            <p>{e.text}</p>
          </div>
          <div>
            <button
              onClick={() => {
                handelValue(e);
                setEditMode(true);
              }}
            >
              Edit
            </button>
            <button onClick={() => handleDelete(e.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
