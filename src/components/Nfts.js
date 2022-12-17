import React from "react";
import { Grid, Typography } from "@mui/material";
import Content from "./Content";
const Nfts = () => {
  return (
    <Grid container spacing={2}>
      <Grid item container justifyContent="center">
        <Typography variant="h6">NFT's</Typography>
      </Grid>
      <Grid item container justifyContent="center">
        <Content
          heading="J Johnson Jr on the moon"
          caption="Buy a collectible 1 of 1 NFT designed by me!"
          button="Buy for $777"
          image="https://athlane-file-management-prod.s3.amazonaws.com/1a42996f-3ad8-4d67-b0a1-f0a63a47bac4"
        />
      </Grid>
      <Grid item container justifyContent="center">
        <Content
          heading="J Johnson Jr's Dream"
          caption="Buy a collectible 1 of 1 NFT designed by me!"
          button="Buy for $777"
          image="https://athlane-file-management-prod.s3.amazonaws.com/cd11c4fe-6cf4-4e36-b000-35f7136040ac"
        />
      </Grid>
      <Grid item container justifyContent="center">
        <Content
          heading="Nike ZoomX Invincible Run Flyknit"
          caption="New Nike running Shoes 💨"
          button="Buy for $180"
          image="https://athlane-file-management-prod.s3.amazonaws.com/68529d7f-87f9-49f7-bd32-a79526c50797"
        />
      </Grid>
    </Grid>
  );
};

export default Nfts;
