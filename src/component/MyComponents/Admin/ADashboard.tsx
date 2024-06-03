import {
  Box,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import LineChart from "../Chart/LineChart";
import DwMuiSelect from "../Styling/DwMuiSelect";
import ASideBar from "./ASideBar";
import "../AdminStyle.css/ADashboard.css";

const ADashboard = () => {
  return (
    <>
      <div className="admindashboard">
        <Box sx={{ display: "flex" }}>
          <ASideBar></ASideBar>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Box height={60} />
            <Typography variant="h4"> Admin Dashboard</Typography>
            <Box height={30} />
            <Typography variant="h6">Overview</Typography>
            <Divider variant="inset" />
            <Box height={20} />
            <Box sx={{ width: "1000px", margin: "auto" }}>
              <Grid container spacing={10}>
                <Grid item xs={6}>
                  <Card sx={{ height: 64 + "vh" }}>
                    <CardContent>
                      <Box sx={{ width: "190px", margin: "auto" }}>
                        <Stack spacing={15} display="flex">
                          <Typography variant="h6" sx={{ color: "blue" }}>
                            Today's Class Count
                          </Typography>
                          <Typography variant="h3" sx={{ color: "blue" }}>
                            7/26
                          </Typography>
                        </Stack>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card sx={{ height: 64 + "vh" }}>
                    <CardContent>
                      <LineChart />
                    </CardContent>
                    <CardActions>
                      <DwMuiSelect />
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Box>

            <Box height={50} />
            <Typography variant="h4">Recent Login</Typography>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default ADashboard;