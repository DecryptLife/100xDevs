// import { useHistory } from "react-router-dom";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Appbar() {
  // const history = useHistory();

  const path = "http://localhost:3067";

  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);

  const init = async () => {
    const response = await axios.get(`${path}/admin/me`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    if (response.data.username) setUserEmail(response.data.username);
  };

  useEffect(() => {
    init();
  }, []);

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
              // history.push("/singup");
              localStorage.setItem("token", null);
              navigate("/signup");
            }}
          >
            Logout
          </Button>
        </div>
      </div>
    );
  }

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

export default Appbar;
