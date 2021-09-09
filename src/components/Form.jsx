import React from "react";

function Form({ setInput, todos, setTodos, input }) {
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== "") {
      setTodos([{ text: input, id: Math.random() * 1000 }, ...todos]);
    }
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
        <button onClick={handleSubmit} type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
