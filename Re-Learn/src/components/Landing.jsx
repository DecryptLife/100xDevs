import { Grid, Typography, Button } from "@mui/material";

function Landing() {
  return (
    <div>
      <Grid container style={{ padding: "5vw" }}>
        <Grid item xs={12} md={6} lg={6}>
          <div style={{ marginTop: 100 }}>
            <Typography variant="h2">Re-Learn Admin</Typography>
            <Typography variant="h6">
              A place to learn, earn and grow
            </Typography>
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
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6}></Grid>
      </Grid>
    </div>
  );
}

export default Landing;
