import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Form = () => {
  return (
    <Box
      sx={{
        border: "2.5px solid white",
        borderRadius: "1rem",
        width: { xs: 500, sm: 640 },
      }}
    >
      <Grid container spacing={2} sx={{ p: 1 }}>
        <Grid item container direction="row" justifyContent="center">
          <Typography variant="subtitle2">Join the squad</Typography>
        </Grid>
        <Grid item container direction="row" justifyContent="center">
          <Typography variant="body2">
            Know when I drop merch & speed vlogs
          </Typography>
        </Grid>
        <Grid item container direction="row" justifyContent="center">
          <TextField
            id="outlined-basic"
            placeholder="Email"
            focused
            sx={{ width: "80%" }}
          />
        </Grid>
        <Grid item container direction="row" justifyContent="center">
          <TextField
            id="outlined-basic"
            placeholder="Phone #"
            focused
            sx={{ width: "80%" }}
          />
        </Grid>
        <Grid item container direction="row" justifyContent="center">
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="I'm a Fan"
              control={<Radio />}
              label="I'm a Fan"
            />
            <FormControlLabel
              value="I'm a Brand"
              control={<Radio />}
              label="I'm a Brand"
            />
            <FormControlLabel
              value="I'm a Creator"
              control={<Radio />}
              label="I'm a Creator"
            />
          </RadioGroup>
        </Grid>
        <Grid item container direction="row" justifyContent="center">
          <Button variant="contained">Submit</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Form;
