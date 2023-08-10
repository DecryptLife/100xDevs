import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Appbar from "./components/Appbar";
import Signin from "./components/Signin.jsx";
import Addcourse from "./components/Addcourse.jsx";
import Courses from "./components/Courses.jsx";
import Course from "./components/Course.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import Landing from "./components/Landing.jsx";
import { BASE_URL } from "./config.js";

function App() {
  const [userEmail, setUserEmail] = useState(null);

  const init = async () => {
    const response = await axios.get(`${BASE_URL}/admin/me`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    if (response.data.username) setUserEmail(response.data.username);
  };

  useEffect(() => {
    init();
  }, []);

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
          <Appbar userEmail={userEmail} setUserEmail={setUserEmail}></Appbar>
          <Routes>
            <Route path="/addcourse" element={<Addcourse />}></Route>
            <Route path="/course/:courseId" element={<Course />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
            <Route
              path="/login"
              element={<Signin setUserEmail={setUserEmail} />}
            ></Route>
            <Route
              path="/signup"
              element={<SignUp setUserEmail={setUserEmail} />}
            ></Route>
            <Route path="/" element={<Landing />}></Route>
          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;

const userState = atom({
  key: "userState",
  default: null,
});
