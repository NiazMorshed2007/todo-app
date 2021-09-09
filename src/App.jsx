import React, { useState } from "react";
import Edit from "./components/Edit";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./style/style.scss";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [openEdit, setOpenEdit] = useState(false);
  return (
    <div className="todo-app">
      <Edit show={(openEdit) => setOpenEdit(openEdit)} open={openEdit} />
      <div className="wrapper">
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoList
          openModal={setOpenEdit}
          input={input}
          setTodos={setTodos}
          todos={todos}
        />
      </div>
    </div>
  );
}

export default App;
