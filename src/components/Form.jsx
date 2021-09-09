import React from "react";

function Form({ setInput, todos, setTodos, input, editMode, setEditMode }) {
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== "") {
      setTodos([{ text: input, id: Math.random() * 1000 }, ...todos]);
    }
    editMode ? setEditMode(false) : setEditMode(editMode);
    //
    setInput("");
  };
  return (
    <div className="form-wrapper">
      <h1>Write Your Todos</h1>
      <form className="todo-form">
        <input
          onChange={handleChange}
          type="text"
          required
          className="todo-input"
          value={input}
          placeholder="Add your todo"
        />
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
          type="submit"
        >
          {editMode ? "Edit" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default Form;
