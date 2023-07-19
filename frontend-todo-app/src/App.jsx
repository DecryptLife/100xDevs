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

var todo = {
  title: "Go to Gym",
  description: "Go to the gym after Owlspark",
  id: 1,
};

function App() {
  const [todos, setTodos] = useState({
    title: "Go to Gym",
    description: "Go to gym after Owlspark program",
  });

  setInterval(() => {
    setTodos({
      title: "Go to church",
      description: "Go to chruch this Sunday",
      id: 2,
    });
  }, 3000);
  return (
    <>
      <h1>
        {todos.title}
        <br></br>
        {todos.description}
      </h1>
      <PersonName firstName={"Benson"} lastName={"Thomas"}></PersonName>
    </>
  );
}

function PersonName(props) {
  return (
    <div>
      {props.firstName} {props.lastName}
    </div>
  );
}

export default App;
