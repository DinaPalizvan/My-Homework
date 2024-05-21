import { useState } from "react";
import "./todolist.css";

export default function Todo() {
  const [todos, setTodos] = useState(["sample todo"]);

  function deleteItem(e) {
    setTodos(todos.filter((item) => item !== e));
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = e.target.elements.todo.value;
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      e.target.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo" style={{ fontSize: "larger" }}>
        Add a todo:
      </label>
      <br />
      <div>
        <input type="text" id="todo" style={{ padding: 5 }} />
        <button className="add">Add</button>
      </div>
      <ul>
        {todos.map((e, i) => {
          return (
            <>
              <div className="container">
                <li key={i} style={{ fontSize: 20, margin: 7 }}>
                  {e}
                </li>
                <button className="delete" onClick={() => deleteItem(e)}>
                  Delete
                </button>
              </div>
            </>
          );
        })}
      </ul>
    </form>
  );
}
