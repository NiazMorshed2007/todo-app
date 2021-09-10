import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./style/style.scss";

function App() {
  let [inputTxt, setInputTxt] = useState("");
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="todo-app">
      <div className="wrapper">
        <Form
          setEditMode={setEditMode}
          editMode={editMode}
          todos={todos}
          setTodos={setTodos}
          inputTxt={inputTxt}
          setInputTxt={setInputTxt}
        />
        <TodoList
          setEditMode={setEditMode}
          editMode={editMode}
          setTodos={setTodos}
          todos={todos}
          inputTxt={inputTxt}
        />
      </div>
    </div>
  );
}

export default App;
