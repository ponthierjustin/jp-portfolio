import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link, useLocation } from "react-router-dom";
import DescriptionIcon from '@material-ui/icons/Description';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: "Sora",
    padding: theme.spacing(1),
  },
  button: {
    padding: theme.spacing(2),
    fontFamily: "Sora",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const location = useLocation();

  return (
    <div className={classes.root}>
     
        <Toolbar>
          <Typography variant="h3" className={classes.title}>
            Justin Ponthier
          </Typography>
          <Typography variant="h6" className={classes.button}>
            <Link
              color="inherit"
              underline="hover"
              to="/"
               className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              } 
            >
              Home
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.button}>
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
          <IconButton
            edge="start"
            color="inherit"
            target="_blank"
            href="https://docs.google.com/document/d/1x0Gih-Em8YZVGmz6BLdd2w4EVD-UJ3qok6b9vrJN0Ac/edit"
            className={classes.button}
          >
            <DescriptionIcon  fontSize="large" />Resume
          </IconButton>

          <IconButton
            edge="start"
            color="inherit"
            target="_blank"
            href="https://github.com/ponthierjustin"
          >
            <GitHubIcon className={classes.button} fontSize="large" /> 
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            target="_blank"
            href="https://www.linkedin.com/in/justin-ponthier-1509a8174/"
          >
            <LinkedInIcon className={classes.button} fontSize="large" />
          </IconButton>
        </Toolbar>
    
    </div>
  );
}
