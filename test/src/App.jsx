import { createContext, useState } from "react";
import Button from "@mui/material/Button";
import { Typography, Card } from "@mui/material";
import "./App.css";

const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider>
      <div>
        <Card style={{ padding: 20, width: 500 }}>
          <Typography variant="h5">Welcome to the counter program</Typography>
          <br />
          <Buttons count={count} setCount={setCount} />
          <CountComponent count={count} />
        </Card>
      </div>
    </CountContext.Provider>
  );
}

function Buttons({ count, setCount }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Increase count={count} setCount={setCount} />
      <Decrease count={count} setCount={setCount} />
    </div>
  );
}

function Increase({ count, setCount }) {
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

function Decrease({ count, setCount }) {
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

function CountComponent({ count }) {
  return <div>{count}</div>;
}

export default App;
