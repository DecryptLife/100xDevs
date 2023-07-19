import { useEffect, useState } from "react";
import "./App.css";

// custom hook
function useTodos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/todos", { method: "GET" }).then((response) => {
      response.json().then((data) => {
        setTodos(data);
      });
    });
  }, []);

  return todos;
}

function App() {
  const todos = useTodos();

  return (
    <div>
      {todos.map((todo) => {
        return <Todo title={todo.title} description={todo.description}></Todo>;
      })}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      {props.title}
      <br />
      {props.description}
      <br />
      <button>Delete</button>
      <br />
      <br />
    </div>
  );
}

export default App;
