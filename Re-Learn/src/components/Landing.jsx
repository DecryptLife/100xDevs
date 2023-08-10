import { Grid, Typography, Button } from "@mui/material";
import { useRecoilValue } from "recoil";
import { userEmailState } from "../store/selectors/userEmail";
import { isUserLoading } from "../store/selectors/isUserLoading";

function Landing() {
  const userEmail = useRecoilValue(userEmailState);
  const userLoading = useRecoilValue(isUserLoading);
  return (
    <div>
      <Grid container style={{ padding: "5vw" }}>
        <Grid item xs={12} md={6} lg={6}>
          <div style={{ marginTop: 100 }}>
            <Typography variant="h2">Re-Learn Admin</Typography>
            <Typography variant="h6">
              A place to learn, earn and grow
            </Typography>
            {!userEmail && !userLoading && (
              <div style={{ display: "flex", marginTop: 20 }}>
                <div style={{ marginRight: 10 }}>
                  <Button
                    size={"large"}
                    variant={"contained"}
                    onClick={() => {
                      navigate("/signup");
                    }}
                  >
                    Signup
                  </Button>
                </div>
                <div>
                  <Button
                    size={"large"}
                    variant={"contained"}
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Signin
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <img src={"/class.webp"} width={"100%"} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Landing;
