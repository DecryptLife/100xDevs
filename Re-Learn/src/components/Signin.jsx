import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";

function Signin() {
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
        <Typography variant="h6">Welcome to Re-Learn. Sign in below</Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card variant="outlined" style={{ width: 400, padding: 20 }}>
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          ></TextField>
          <br />
          <br />
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type={"password"}
          ></TextField>
          <br />
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button size="large" variant="contained">
              Sign up
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Signin;
