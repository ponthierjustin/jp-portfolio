import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "../Button/Button";
import Divider from '@material-ui/core/Divider';
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    /* textAlign: "center", */
    /* color: theme.palette.text.secondary, */
    fontFamily: "Sora",
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
          <Typography variant="h2" className={classes.paper}>
            Justin Ponthier
          </Typography>
          <Divider variant=''/>
        </Grid>
         <Grid item xs={12} sm={2}>
         <Typography variant="h6" className={classes.paper}>
          <Link
            color="inherit"
            underline="hover"
            to="/jp-portfolio"
            className={
              location.pathname === "/jp-portfolio"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Home
          </Link>
          </Typography>
          <Divider variant=''/>
         <Typography variant="h6" className={classes.paper}>
            Projects
          </Typography>
          <Divider variant=''/>
          <Typography variant="h6" className={classes.paper}>
          <Link
            to="/contact"
            color="inherit"
            underline="hover"
            className={
              location.pathname === "/contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </Link>
          </Typography>
          <Divider variant=''/>
          <Typography variant="h6" className={classes.paper}>
          <IconButton
          edge="start"
          color="inherit"
          target="_blank"
          href="https://docs.google.com/document/d/1x0Gih-Em8YZVGmz6BLdd2w4EVD-UJ3qok6b9vrJN0Ac/edit"
          className={classes.button}
        >
          Resume
        </IconButton>
          </Typography>
           </Grid> 
           <Grid item xs={12} sm={1}>
           </Grid> 
        <Grid container item xs={12} sm={8}>
          <Button />
        </Grid>
        {/*   <Grid item xs={3}  >
        <Button/>
        </Grid>
        <Grid item xs={3}>
        <Button/>
        </Grid>
        <Grid item xs={3}>
        <Button/>
        </Grid> */}
      </Grid>
    </div>
  );
}
