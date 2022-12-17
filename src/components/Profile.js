import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import Box2 from "./Box2";
import Content from "./Content";
import Icons from "./Icons";
import Box3 from "./Box3";
import Box4 from "./Box4";
import Form from "./Form";
import Business from "./Business";
import Music from "./Music";
import Nfts from "./Nfts";
import Last from "./Last";

const Profile = () => {
  const Componet1 = () => (
    <iframe
      width="100%"
      height="360"
      src="https://www.youtube.com/embed/fJGDnvoLKFA"
      title="Killer Workout With Coach Batman! Some Didn't Make It - Workout Vlog 3"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
  const Componet2 = () => (
    <iframe
      width="100%"
      height="360"
      src="https://www.youtube.com/embed/RGj5K54dd58"
      title="Racing People for $$$ At Venice Beach!"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      item
      xs={12}
    >
      <Avatar
        alt="j"
        sx={{ width: { xs: 80, md: 100 }, height: { xs: 80, md: 100 } }}
        src="https://res.cloudinary.com/pillario/image/upload/c_thumb,g_custom,w_300,h_300/user-image/page/087c4922-3aae-4514-96a1-a48d63f51725?_reload=21da9800-7c82-11ed-bf93-a712fb6527a4"
      />
      <Typography variant="h6">J Johnson Jr</Typography>
      <Typography variant="subtitle1">
        Created by different elements ⚛️ Athlete & CEO
      </Typography>
      <Typography variant="subtitle1">Raleigh, NC</Typography>
      <Grid item>
        <Icons />
      </Grid>
      <Typography variant="h6" sx={{ mt: 1 }}>
        Exclusive Content
      </Typography>
      <Typography variant="h6" sx={{ mt: 3 }}>
        Get access to all the following content⬇️
      </Typography>
      <Grid item>
        <Grid container spacing={2}>
          <Grid item container justifyContent="center">
            <Content
              heading="Weekly Training"
              caption="Get the inside view of what I did for training every week! FULL
            BREAKDOWN"
              button="Subscribe to unlock"
              image="https://res.cloudinary.com/pillario/image/upload/c_thumb,g_custom,h_250,w_340/v1/page-block-image/digital-product/wide/52de6ac1-5eab-11ed-acc0-432ae882870e_d6eac790-5eac-11ed-acc0-432ae882870e"
            />
          </Grid>
          <Grid item container justifyContent="center">
            <Content
              heading="Weekly Meals"
              button="Subscribe to unlock"
              caption="Each week I will document what I eat in an organised fashion"
              image="https://res.cloudinary.com/pillario/image/upload/c_thumb,g_custom,h_250,w_340/v1/page-block-image/digital-product/wide/e8c75571-5b12-11ed-b724-e90c77c26e8c_4fa4cca0-5b13-11ed-b724-e90c77c26e8c"
            />
          </Grid>
          <Grid item container justifyContent="center">
            <Content
              heading="Daily Quote!"
              button="Subscribe to unlock"
              caption="A quote that will empower you to achieve your dreams!"
              image="https://res.cloudinary.com/pillario/image/upload/c_thumb,g_custom,h_250,w_340/v1/page-block-image/digital-product/wide/0862a8b1-5ead-11ed-acc0-432ae882870e_0a142940-5ead-11ed-acc0-432ae882870e"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item sx={{ mt: 5 }}>
        <Box2 />
      </Grid>
      <Grid item>
        <Box3 />
      </Grid>
      <Grid item>
        <Box4 title="Workout Vlog with Batman!" Youtube={Componet1} />
      </Grid>
      <Grid item>
        <Form />
      </Grid>
      <Grid item>
        <Box4 title="Racing people for $$$" Youtube={Componet2} />
      </Grid>
      <Grid item>
        <Business />
      </Grid>
      <Grid item>
        <Music />
      </Grid>
      <Grid item>
        <Nfts />
      </Grid>
      <Grid item>
        <Last />
      </Grid>
    </Grid>
  );
};

export default Profile;
