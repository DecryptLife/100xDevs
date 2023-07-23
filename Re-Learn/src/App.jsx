import SignUp from "./SignUp.jsx";
import Appbar from "./Appbar.jsx";
import "./App.css";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#eeeeee",
      }}
    >
      <Appbar></Appbar>
      <SignUp></SignUp>
    </div>
  );
}

export default App;
