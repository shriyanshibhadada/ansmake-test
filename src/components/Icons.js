import { Avatar, Grid } from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AppleIcon from "@mui/icons-material/Apple";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import TextsmsIcon from "@mui/icons-material/Textsms";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ShopIcon from "@mui/icons-material/Shop";
const Icons = () => {
  const list = [
    MailIcon,
    InstagramIcon,
    TextsmsIcon,
    TwitterIcon,
    WhatsAppIcon,
    YouTubeIcon,
    LinkedInIcon,
    AppleIcon,
    AudiotrackIcon,
    ShopIcon,
  ];
  return (
    <Grid container spacing={2}>
      {list.map((Item, id) => (
        <Grid item key={id} xs={2.4} md={1.2}>
          <Avatar
            sx={{ bgcolor: "transparent" }}
            style={{
              border: "2px solid #FFF",
              padding: "20px",
            }}
          >
            <Item style={{ color: "#FFF" }} />
          </Avatar>
        </Grid>
      ))}
    </Grid>
  );
};

export default Icons;
