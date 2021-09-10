import React from "react";

function TodoList(props) {
  const handleDlt = (id) => {
    props.setTodos(
      props.todos.filter((el) => {
        return el.id !== id;
      })
    );
  };

  const handleEdit = (id) => {
    props.todos.filter((e) => {
      if (id === e.id) {
        props.setInputTxt(e.text);
        props.setInputId(e.id);
      }
    });
  };

  const handleEditMode = () => {
    props.setEditMode(true);
  };
  return (
    <div className="todo-list-wrapper">
      {props.todos.map((e) => (
        <div className="row" key={e.id}>
          <div>
            <p>{e.text}</p>
          </div>
          <div>
            <button
              onClick={() => {
                handleEditMode();
                handleEdit(e.id);
              }}
            >
              Edit
            </button>
            <button onClick={() => handleDlt(e.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
