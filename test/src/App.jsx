import { createContext, useContext, useState } from "react";
import Button from "@mui/material/Button";
import { Typography, Card } from "@mui/material";
import "./App.css";

const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider
      value={{
        count: count,
        setCount: setCount,
      }}
    >
      <div>
        <Card style={{ padding: 20, width: 500 }}>
          <Typography variant="h5">Welcome to the counter program</Typography>
          <br />
          <Buttons />
          <CountComponent />
        </Card>
      </div>
    </CountContext.Provider>
  );
}

function Buttons() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Increase />
      <Decrease />
    </div>
  );
}

function Increase() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Counter
      </Button>
    </div>
  );
}

function Decrease() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease Counter
      </Button>
    </div>
  );
}

function CountComponent() {
  const { count } = useContext(CountContext);
  return <div>{count}</div>;
}

export default App;
