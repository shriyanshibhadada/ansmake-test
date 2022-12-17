import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
const Box5 = ({ heading, caption, money }) => {
  return (
    <Box
      sx={{
        border: "2.5px solid white",
        borderRadius: "1rem",
        width: { xs: 500, sm: 640 },
        p: 2,
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          container
          justifyContent="center"
          xs={5}
          md={3}
          display="flex"
          alignItems="center"
        >
          <QuestionAnswerRoundedIcon sx={{ fontSize: 100 }} />
        </Grid>
        <Grid item xs={7} md={6}>
          <Grid item xs={12}>
            <Typography variant="h6">{heading}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">{caption}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">{money}</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={3} display="flex" alignItems="center">
          <Grid container direction="column" alignItems="center">
            <Button color="primary" variant="contained" sx={{ width: "90%" }}>
              Request Me
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Box5;
