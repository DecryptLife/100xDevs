import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Appbar from "./components/Appbar";
import Signin from "./components/Signin.jsx";
import Addcourse from "./components/Addcourse.jsx";
import Courses from "./components/Courses.jsx";
import Course from "./components/Course.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { userState } from "./store/atoms/user";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import Landing from "./components/Landing.jsx";
import { BASE_URL } from "./config.js";

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
          <Appbar />
          <InitUser />
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

function InitUser() {
  const setUser = useSetRecoilState(userState);

  const init = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/admin/me`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      if (response.data.username) {
        setUser({
          isLoading: false,
          userEmail: response.data.username,
        });
      } else {
        setUser({
          isLoading: false,
          userEmail: null,
        });
      }
    } catch (e) {
      setUser({
        isLoading: false,
        userEmail: null,
      });
    }
  };

  useEffect(() => {
    init();
  }, []);
}
export default App;
