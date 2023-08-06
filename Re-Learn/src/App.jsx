import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp.jsx";
import Appbar from "./Appbar.jsx";
import Signin from "./Signin.jsx";
import Addcourse from "./Addcourse.jsx";
import Courses from "./Courses.jsx";
import Course from "./Course.jsx";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

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
          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
