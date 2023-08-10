// import { useHistory } from "react-router-dom";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/user";
import { isUserLoading } from "../store/selectors/isUserLoading";
import { userEmailState } from "../store/selectors/userEmail";
function Appbar({}) {
  const navigate = useNavigate();
  const userLoading = useRecoilValue(isUserLoading);
  const userEmail = useRecoilValue(userEmailState);
  const setUser = useSetRecoilState(userState);

  if (userLoading) {
    return <></>;
  }

  if (userEmail) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 10,
          zIndex: 1,
        }}
      >
        <div>
          <Typography variant="h6">Re-Learn</Typography>
        </div>
        <div style={{ display: "flex" }}>
          <Button
            onClick={() => {
              navigate("/addcourse");
            }}
          >
            Add Course
          </Button>
          <Button
            onClick={() => {
              navigate("/courses");
            }}
          >
            Courses
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              localStorage.setItem("token", null);
              setUserEmail(null);
              navigate("/signup");
            }}
          >
            Logout
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <div>
          <Typography variant="h6">Re-Learn</Typography>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 10 }}>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign up
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              onClick={() => {
                // history.push("/login");
                navigate("/login");
              }}
            >
              Sign in
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Appbar;
