import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./style/style.scss";

function App() {
  let [inputTxt, setInputTxt] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="todo-app">
      <div className="wrapper">
        <Form
          todos={todos}
          setTodos={setTodos}
          inputTxt={inputTxt}
          setInputTxt={setInputTxt}
        />
        <TodoList setTodos={setTodos} todos={todos} inputTxt={inputTxt} />
      </div>
    </div>
  );
}

export default App;
