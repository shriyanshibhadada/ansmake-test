import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";
import HearingIcon from "@mui/icons-material/Hearing";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import StarRateIcon from "@mui/icons-material/StarRate";
import KeyIcon from "@mui/icons-material/Key";
const Business = () => {
  return (
    <Grid container spacing={2}>
      <Grid item container justifyContent="center">
        <Typography variant="h6">Business</Typography>
      </Grid>
      <Grid item container justifyContent="center">
        <Link underline="none" href="https://jjjbrand.com/">
          <Box
            sx={{
              border: "2.5px solid white",
              borderRadius: "1rem",
              width: { xs: 500, sm: 640 },
              height: { xs: "100%", md: 61 },
            }}
          >
            <Grid sx={{ p: 1 }} item display="flex" alignItems="center">
              <Grid container direction="column" alignItems="center">
                <Typography variant="subtitle2">Speed Socks ⚡️</Typography>
                <Typography variant="body2">
                  Socks created for speed by speed
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Link>
      </Grid>
      <Grid item container justifyContent="center">
        <Link underline="none" href="https://hf-highway.webflow.io/">
          <Box
            sx={{
              border: "2.5px solid white",
              borderRadius: "1rem",
              width: { xs: 500, sm: 640 },
              height: { xs: "100%", md: 61 },
            }}
          >
            <Grid sx={{ p: 1 }} item display="flex" alignItems="center">
              <Grid item>
                <HearingIcon />
              </Grid>
              <Grid container direction="column" alignItems="center">
                <Typography variant="subtitle2">
                  High Frequency Highway
                </Typography>
                <Typography variant="body2">
                  My app with a library of positive frequencies
                </Typography>
              </Grid>
              <Grid item>
                <ElectricBoltIcon />
              </Grid>
            </Grid>
          </Box>
        </Link>
      </Grid>
      <Grid item container justifyContent="center">
        <Link underline="none" href="https://ishoppurium.com/">
          <Box
            sx={{
              border: "2.5px solid white",
              borderRadius: "1rem",
              width: { xs: 500, sm: 640 },
              height: { xs: "100%", md: 61 },
            }}
          >
            <Grid sx={{ p: 1 }} item display="flex" alignItems="center">
              <Grid container direction="column" alignItems="center">
                <Typography variant="subtitle2">Purium Super Food</Typography>
                <Typography variant="body2">
                  Organic whole food so you can perform at your best
                </Typography>
              </Grid>
              <Grid item>
                <ElectricBoltIcon />
              </Grid>
            </Grid>
          </Box>
        </Link>
      </Grid>
      <Grid item container justifyContent="center">
        <Link underline="none" href="https://app.pillar.io/referral/j">
          <Box
            sx={{
              border: "2.5px solid white",
              borderRadius: "1rem",
              width: { xs: 500, sm: 640 },
              height: { xs: "100%", md: 61 },
            }}
          >
            <Grid sx={{ p: 1.5 }} item display="flex" alignItems="center">
              <Grid item>
                <KeyIcon />
              </Grid>
              <Grid container direction="column" alignItems="center">
                <Typography variant="subtitle2">
                  Make your own page like this for free with Pillar
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Link>
      </Grid>
      <Grid item container justifyContent="center">
        <Link
          underline="none"
          href="https://www.famousbirthdays.com/people/j-johnson.html"
        >
          <Box
            sx={{
              border: "2.5px solid white",
              borderRadius: "1rem",
              width: { xs: 500, sm: 640 },
              height: { xs: "100%", md: 61 },
            }}
          >
            <Grid sx={{ p: 1.5 }} item display="flex" alignItems="center">
              <Grid item>
                <StarRateIcon />
              </Grid>
              <Grid container direction="column" alignItems="center">
                <Typography variant="subtitle2">Famous Birthdays</Typography>
              </Grid>
            </Grid>
          </Box>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Business;
