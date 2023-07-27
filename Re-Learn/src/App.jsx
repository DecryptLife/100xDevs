import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp.jsx";
import Appbar from "./Appbar.jsx";
import Signin from "./Signin.jsx";
import Addcourse from "./Addcourse.jsx";
import Courses from "./Courses.jsx";

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
          <Route path="/addcourse" element={<Addcourse />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/login" element={<Signin />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
