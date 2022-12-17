import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import Box4 from "./Box4";
const Music = () => {
  return (
    <Grid container spacing={2}>
      <Grid item container justifyContent="center">
        <Typography variant="h6">Music</Typography>
      </Grid>
      <Grid item container justifyContent="center">
        <Box4
          title="Wishing - King Han"
          Youtube={() => (
            <iframe
              title="spotify"
              //   style="border-radius:12px"
              src="https://open.spotify.com/embed/track/3clNdkaKsxa3bTHRVehGGf?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          )}
        />
      </Grid>
      <Grid item container justifyContent="center">
        <Link underline="none" href="https://sndo.ffm.to/04zwj4m">
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
                <AudiotrackIcon />
              </Grid>
              <Grid container direction="column" alignItems="center">
                <Typography variant="subtitle2">Stream my song!</Typography>
                <Typography variant="body2">Available everywhere!</Typography>
              </Grid>
            </Grid>
          </Box>
        </Link>
      </Grid>
      <Grid item container justifyContent="center">
        <Box4
          title="Wishing Music Video"
          Youtube={() => (
            <iframe
              width="100%"
              height="360"
              src="https://www.youtube.com/embed/bmJFOy5Y0FU"
              title="King Han Wishing Official music video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        />
      </Grid>
    </Grid>
  );
};

export default Music;
