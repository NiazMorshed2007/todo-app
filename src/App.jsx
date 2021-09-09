import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./style/style.scss";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState(false);
  return (
    <div className="todo-app">
      <div className="wrapper">
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editMode={editMode}
          setEditMode={setEditMode}
        />
        <TodoList
          setEditMode={setEditMode}
          setInput={setInput}
          input={input}
          setTodos={setTodos}
          todos={todos}
        />
      </div>
    </div>
  );
}

export default App;
