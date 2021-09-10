import React from "react";

function Form(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.inputTxt !== "") {
      props.setTodos([{ text: props.inputTxt }, ...props.todos]);
    }
    props.setInputTxt("");
  };
  const handleChange = (e) => {
    props.setInputTxt(e.target.value);
  };
  return (
    <div className="form-wrapper">
      <h1>Write Your Todos</h1>
      <form className="todo-form">
        <input
          type="text"
          required
          value={props.inputTxt}
          onChange={(e) => handleChange(e)}
          className="todo-input"
          placeholder="Add your todo"
        />
        <button onClick={(e) => handleSubmit(e)} type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
