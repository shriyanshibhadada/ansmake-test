import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const Content = ({ image, heading, caption, button }) => {
  return (
    // <Grid item xs={12}>
    <Box
      sx={{
        border: "2.5px solid white",
        borderRadius: "1rem",
        width: { xs: 500, sm: 640 },
        height: { xs: 175 },
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <Box
            component="img"
            alt="img"
            sx={{
              borderRadius: "1rem 0rem 0rem 1rem",
              height: { xs: 170 },
            }}
            src={image}
          />
        </Grid>
        <Grid item xs>
          <Grid item xs={12} sx={{ mt: { xs: 2, md: 3 } }}>
            <Typography variant="subtitle2">{heading}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">{caption}</Typography>
          </Grid>
          <Grid item xs={12} sx={{ mt: { xs: 2, md: 3 } }}>
            <Button color="primary" variant="contained">
              {button}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    // </Grid>
  );
};

export default Content;
