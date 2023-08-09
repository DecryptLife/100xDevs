import { createContext, useContext, useState } from "react";
import Button from "@mui/material/Button";
import { Typography, Card } from "@mui/material";
import { useRecoilValue, useSetRecoilState, RecoilRoot, atom } from "recoil";
import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <div>
        <Card style={{ padding: 20, width: 500 }}>
          <Typography variant="h5">Welcome to the counter program</Typography>
          <br />
          <Buttons />
          <CountComponent />
        </Card>
      </div>
    </RecoilRoot>
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
  const setCount = useSetRecoilState(countState);
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          setCount((existingCount) => existingCount + 1);
        }}
      >
        Increase Counter
      </Button>
    </div>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(countState);
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          setCount((existingCount) => existingCount - 1);
        }}
      >
        Decrease Counter
      </Button>
    </div>
  );
}

function CountComponent() {
  const count = useRecoilValue(countState);
  return <div>{count}</div>;
}

export default App;

const countState = atom({
  key: "countState",
  default: 0,
});
