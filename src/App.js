import { useState } from "react";
import "./App.css";

export default function App() {
  const [toDos, SetToDos] = useState([]);
  const [item, SetItem] = useState("");

  // Handle submit
  function handleSubmit(e) {
    e.preventDefault();

    // Handle New todo
    const newTodo = { id: Date.now(), todo: item, done: false };
    SetToDos((toDos) => [...toDos, newTodo]);
  }

  // Handle Input
  function handleInput(e) {
    SetItem(e.target.value);
  }

  // Handle Delete
  function handleDelete(id) {
    SetToDos(toDos.filter((todo) => todo.id !== id));
  }

  // handleCheckBox
  function handleCheckBox(todo) {}

  return (
    <>
      <div className="container">
        <Form
          onSubmit={handleSubmit}
          onInput={handleInput}
          onDelete={handleDelete}
        />
      </div>
      <TaskSection
        todos={toDos}
        onDelete={handleDelete}
        OncheckBox={handleCheckBox}
      />
    </>
  );
}

// FORM COMPONENT
function Form({ onSubmit, onInput, onDelete }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="enter a todo" onChange={onInput} />
      <input className="button" type="button" value="ADD" />
    </form>
  );
}

// TaskSection Compone
function TaskSection({ todos, onDelete, OncheckBox }) {
  return (
    <>
      <div className="task-section">
        <ul>
          {todos.map((todo) => (
            <Item
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              OncheckBox={OncheckBox}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

// Item Component
function Item({ todo, onDelete, OncheckBox }) {
  return (
    <>
      <li>
        <input type="checkBox" onClick={() => OncheckBox(todo)} />
        <span className={`todo-text ${todo.done ? "checked" : ""}`}>
          {" "}
          {todo.todo}
        </span>
        <span className="delete" onClick={() => onDelete(todo.id)}>
          ❌
        </span>
      </li>
    </>
  );
}
