import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((currentArray) => [...currentArray, todo]);
    setTodo("");
  };
  console.log(todos);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>My To Do ({todos.length})</h1>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="Write your todo..."
        />
        <button>submit</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
