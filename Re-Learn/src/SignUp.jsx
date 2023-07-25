import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";

function SignUp() {
  const path = "http://localhost:3067/admin";
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
            id="username"
            fullWidth={true}
            label="Email"
            variant="outlined"
          ></TextField>
          <br />
          <br />
          <TextField
            id="password"
            fullWidth={true}
            label="Password"
            variant="outlined"
            type={"password"}
          ></TextField>
          <br />
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              size="large"
              variant="contained"
              onClick={() => {
                let username = document.getElementById("username").value;
                let password = document.getElementById("password").value;

                fetch(`${path}/signup`, {
                  method: "POST",
                  body: JSON.stringify({
                    username: username,
                    password: password,
                  }),
                  headers: {
                    "Content-type": "application/json",
                  },
                });
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
