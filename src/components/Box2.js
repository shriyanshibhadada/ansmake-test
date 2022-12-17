import { Box, Button, Grid } from "@mui/material";
import React from "react";

const Box2 = () => {
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          border: "2.5px solid white",
          borderRadius: "1rem",
          width: { xs: 500, sm: 640 },
          height: { xs: "100%", md: 175 },
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            sx={{
              xs: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              alt="img"
              sx={{
                borderRadius: {
                  xs: "1rem 1rem 0rem 0rem",
                  md: "1rem 0rem 0rem 1rem",
                },
                height: { xs: "99%", md: 171 },
                width: { xs: "100%" },
              }}
              src="https://res.cloudinary.com/pillario/image/upload/c_thumb,g_custom,h_320,w_640/v1/page-block-image/digital-product/f2df2a40-feda-11ec-8f06-79a38aecb29d"
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            alignItems="center"
            mb={1}
            ml={1}
            mr={1}
          >
            <Grid container direction="column" alignItems="center" item xs={12}>
              <Button color="primary" variant="contained" fullWidth={true}>
                Buy for $4.99
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Box2;
