import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./style/style.scss";

function App() {
  let [inputTxt, setInputTxt] = useState("");
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [inputId, setInputId] = useState();

  return (
    <div className="todo-app">
      <div className="wrapper">
        <Form
          inputId={inputId}
          setInputId={setInputId}
          setEditMode={setEditMode}
          editMode={editMode}
          todos={todos}
          setTodos={setTodos}
          inputTxt={inputTxt}
          setInputTxt={setInputTxt}
        />
        <TodoList
          inputId={inputId}
          setInputId={setInputId}
          setEditMode={setEditMode}
          editMode={editMode}
          setTodos={setTodos}
          todos={todos}
          inputTxt={inputTxt}
          setInputTxt={setInputTxt}
        />
      </div>
    </div>
  );
}

export default App;
