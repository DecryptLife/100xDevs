import { useState } from "react";
import "./App.css";

// var todos = [
//   {
//     title: "go to gym",
//     description: "go to gym at 1",
//     id: 1,
//   },
//   {
//     title: "go to church",
//     description: "go to church at 12p",
//     id: 1,
//   },
// ];

function App() {
  const [todoForToday, setTodoForToday] = useState([
    {
      title: "Go to Gym",
      description: "Go to gym after Owlspark program",
      id: 1,
    },
    {
      title: "Go to church",
      description: "Go to chruch this Sunday",
      id: 2,
    },
  ]);

  return (
    <div>
      {todoForToday.map((todo) => {
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
      <br />
    </div>
  );
}

export default App;
