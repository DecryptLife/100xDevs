import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Appbar from "./components/Appbar";
import Signin from "./components/Signin.jsx";
import Addcourse from "./components/Addcourse.jsx";
import Courses from "./components/Courses.jsx";
import Course from "./components/Course.jsx";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import Landing from "./components/Landing.jsx";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#eeeeee",
        height: "100vh",
        width: "100vw",
      }}
    >
      <RecoilRoot>
        <Router>
          <Appbar></Appbar>
          <Routes>
            <Route path="/addcourse" element={<Addcourse />}></Route>
            <Route path="/course/:courseId" element={<Course />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
            <Route path="/login" element={<Signin />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/" element={<Landing />}></Route>
          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
