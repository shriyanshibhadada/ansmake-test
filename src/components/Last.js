import React from "react";
import { Grid } from "@mui/material";
import Box5 from "./Box5";
import Box4 from "./Box4";
const Last = () => {
  return (
    <Grid container spacing={2}>
      <Grid item container justifyContent="center">
        <Box5 heading="Critique your running form 🏃" caption="" money="$10" />
      </Grid>
      <Grid item container justifyContent="center">
        <Box4
          title="Workout Vlog #2"
          Youtube={() => (
            <iframe
              width="100%"
              height="360"
              src="https://www.youtube.com/embed/kFpk7Ho7QEw"
              title="Explosiveness Record Broken @ Sports Academy! + Intense Workout"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        />
      </Grid>
      <Grid item container justifyContent="center">
        <Box4
          title="YouTube"
          Youtube={() => (
            <iframe
              width="100%"
              height="360"
              src="https://www.youtube.com/embed/kQPBfyHxK1k"
              title="Recovery Tips To Run Faster - Recovery Vlog in California With TJ Graham"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        />
      </Grid>
      <Grid item container justifyContent="center">
        <Box5
          heading="Link On Pillar"
          caption="Have your link on my Pillar page. I have 15k+ visits"
          money="$500"
        />
      </Grid>
      <Grid item container justifyContent="center">
        <Box5
          heading="Follow back"
          caption="I'll follow you back on ig"
          money="$222"
        />
      </Grid>
    </Grid>
  );
};

export default Last;
