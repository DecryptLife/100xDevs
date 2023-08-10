import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";
import { useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/user";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);
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
                const response = await axios.post(`${BASE_URL}/admin/signup`, {
                  username: email,
                  password: password,
                });
                console.log("check");
                let data = response.data;
                localStorage.setItem("token", data.token);
                setUser({ userEmail: email, isLoading: false });
                navigate("/");
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
