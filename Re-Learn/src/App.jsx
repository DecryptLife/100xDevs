import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp.jsx";
import Appbar from "./Appbar.jsx";
import Signin from "./Signin.jsx";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#eeeeee",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Appbar></Appbar>
      <Router>
        <Routes>
          <Route path="/login" element={<Signin />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
