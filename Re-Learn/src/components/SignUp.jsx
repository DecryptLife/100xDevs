import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const path = "http://localhost:3067";
  return (
    <div>
      <div
        style={{
          paddingTop: 150,
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6">Welcome to Re-Learn. Sign up below</Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant="outlined" style={{ width: 400, padding: 20 }}>
          <TextField
            fullWidth={true}
            label="Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
          <br />
          <br />
          <TextField
            fullWidth={true}
            label="Password"
            variant="outlined"
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
          <br />
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              size="large"
              variant="contained"
              onClick={async () => {
                const response = await axios.post(`${path}/admin/signup`, {
                  username: email,
                  password: password,
                });

                let data = response.data;
                localStorage.setItem("token", data.token);
                window.location = "/";
                // fetch(`${path}/admin/signup`, {
                //   method: "POST",
                //   body: JSON.stringify({
                //     username: email,
                //     password: password,
                //   }),
                //   headers: {
                //     "Content-type": "application/json",
                //   },
                // })
                //   .then((res) => res.json())
                //   .then((data) => {
                //     localStorage.setItem("token", data.token);
                //     window.location = "/";
                //   });
              }}
            >
              Sign up
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default SignUp;
