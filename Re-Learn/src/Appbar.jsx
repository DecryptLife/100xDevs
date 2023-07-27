// import { useHistory } from "react-router-dom";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
function Appbar() {
  // const history = useHistory();

  const path = "http://localhost:3067";

  const [userEmail, setUserEmail] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  useEffect(() => {
    fetch(`${path}/admin/me`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setUserEmail(data.username));
  }, []);

  // prevents
  if (isLoading) {
    return <div></div>;
  }
  if (userEmail) {
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
          <div>{userEmail}</div>
          <div style={{ marginRight: 10 }}>
            <Button
              variant="contained"
              onClick={() => {
                // history.push("/singup");
                localStorage.setItem("token", null);
                window.location = "/signup";
              }}
            >
              Logout
            </Button>
          </div>
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
              // history.push("/singup");
              window.location = "/signup";
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
              window.location = "/login";
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
