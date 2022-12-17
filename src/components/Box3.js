import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";

import YouTubeIcon from "@mui/icons-material/YouTube";
const Box3 = () => {
  return (
    <Grid item xs={12}>
      <Link
        underline="none"
        href="https://www.youtube.com/playlist?list=PLM2ccN457sxRuVSqTHINmtkkwiJq1txwW"
      >
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
              <YouTubeIcon />
            </Grid>
            <Grid container direction="column" alignItems="center">
              <Typography variant="subtitle2">
                Speed Training Playlist
              </Typography>
              <Typography variant="body2">
                Get faster for any sports with these speed tips
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Link>
    </Grid>
  );
};

export default Box3;
