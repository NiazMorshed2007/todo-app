import React from "react";

function Form(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.editMode && props.inputTxt !== "") {
      props.todos.filter((el, i) => {
        if (el.id === props.inputId) {
          props.todos[i].text = props.inputTxt;
        }
      });
      props.setTodos(props.todos);
    } else if (props.inputTxt !== "") {
      props.setTodos([
        { text: props.inputTxt, id: Math.random() * 1000 },
        ...props.todos,
      ]);
    }
    props.setInputTxt("");
  };

  // const handleEditChange = () => {
  //   props.todos.filter((el) => {
  //     if (el.id === props.inputId && props.editMode) {
  //       return (props.todos.text = props.inputTxt);
  //     }
  //   });
  // };

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
        <button
          onClick={(e) => {
            handleSubmit(e);
            props.editMode
              ? props.setEditMode(false)
              : props.setEditMode(props.editMode);
            // handleEditChange();
          }}
          type="submit"
        >
          {props.editMode ? "Edit" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default Form;
