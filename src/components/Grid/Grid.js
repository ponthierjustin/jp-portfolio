import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "../Button/Button";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";
import { Link, useLocation } from "react-router-dom";
import Slide from "@material-ui/core/Slide";
import Grow from "@material-ui/core/Grow";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    /* textAlign: "center",  */
    /* color: theme.palette.text.secondary, */
    fontFamily: "Bebas Neue",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12} sm={12}>
          {/* <Typography variant="h3" className={classes.paper}>
            Justin Ponthier
          </Typography>  */}

          <Divider /* variant="middle" */ />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Grow in={true}>
            <Typography variant="h3" className={classes.paper}>
              Home
            </Typography>
          </Grow>
          <Grow in={true}>
            <Typography variant="h3" className={classes.paper}>
              Projects
            </Typography>
          </Grow>
          <Grow in={true}>
            <Typography variant="h3" className={classes.paper}>
              Contact
            </Typography>
          </Grow>
        </Grid>

        <Grid item xs={12} sm={9}>
          <Button/>
        </Grid>
      </Grid>
    </div>
  );
}
