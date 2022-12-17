import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Box4 = ({ title, Youtube }) => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    // <Grid item xs={12}>
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      sx={{
        border: "2.5px solid white",
        borderRadius: "1rem",
        width: { xs: 500, sm: 640 },
      }}
      style={{
        backgroundColor: "transparent",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid container>
          <Grid item xs={1}>
            <YouTubeIcon />
          </Grid>
          <Grid item xs={11}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Typography variant="subtitle2">{title}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <Youtube />
        </Box>
      </AccordionDetails>
    </Accordion>
    // </Grid>
  );
};

export default Box4;
