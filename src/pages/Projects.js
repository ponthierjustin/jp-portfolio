import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "../components/Button/Button";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";
import { Link, useLocation } from "react-router-dom";
import Grow from "@material-ui/core/Grow";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    fontFamily: "Bebas Neue",
  },
}));

const Projects = () => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12} sm={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Grow in={true}>
            <Typography variant="h3" className={classes.paper}>
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
          </Grow>
          <Grow in={true}>
            <Typography variant="h3" className={classes.paper}>
              <Link
                color="inherit"
                underline="hover"
                to="/projects"
                className={
                  location.pathname === "/projects"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Projects
              </Link>
            </Typography>
          </Grow>
          <Grow in={true}>
            <Typography variant="h3" className={classes.paper}>
              <Link
                to="/contact"
                color="inherit"
                underline="hover"
                className={
                  location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact
              </Link>
            </Typography>
          </Grow>
        </Grid>

        <Grid container item xs={12} sm={9}>
          <Grow in={true}>
            <Button />
          </Grow>
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
