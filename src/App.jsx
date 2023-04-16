import { useState } from "react";
import "./styles.css";

export default function App() {
  // useState returns an array with two items: the new item and a function to set the new item
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  // handleSubmit is a function that takes an event as an argument
  function handleSubmit(e) {
    e.preventDefault();
    // setTodos is a function that takes a function as an argument
    setTodos((currentTodos) => {
      return [
        // currentTodos is an array of objects
        ...currentTodos,
        // the new object has a random id, the title is the value of newItem, and completed is false
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
  }

  // handleSubmit is a function that takes an event as an argument
  return (
    // the fragment <> </> is a way to return multiple elements without wrapping them in a div
    <>
      <h1 className="header">Todo List</h1>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            // onChange takes an event as an argument and sets the value of newItem to the value of the input
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 2<button className="btn btn-danger">Delete</button>
          </label>
        </li>
      </ul>
    </>
  );
}
