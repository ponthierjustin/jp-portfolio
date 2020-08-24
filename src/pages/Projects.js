import React from "react";
import Button from "../components/Button/Button";
import PokeButton from "../components/Button/PokeButton";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link, useLocation } from "react-router-dom";
import Grow from "@material-ui/core/Grow";
import SvgIcon from "@material-ui/core/SvgIcon";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    fontFamily: "Bebas Neue",
  },
  button: {
    padding: theme.spacing(1),
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
                style={{ color: "inherit", textDecoration: "inherit" }}
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
                style={{ color: "inherit", textDecoration: "inherit" }}
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
                style={{ color: "inherit", textDecoration: "inherit" }}
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
          <Typography variant="h2" className={classes.paper}>
            Track Packer
          </Typography>
          <Button />
          <Typography variant="h5" className={classes.paper}>
            This application keeps track of the user's digital collection of a
            user's adventure gear. Users create an account, which they then can
            add items into their inventory. When users create their excursion,
            they are able to add into their inventory in that specific
            excursion. This allows the user to keep track of what they need for
            all their adventures! The application was built using full MERN
            stack technologies.
          </Typography>
          <Typography variant="h2" className={classes.paper}>
            Pokemon Trader
          </Typography>
          <PokeButton />
          <Typography variant="h5" className={classes.paper}>
            This application keeps track of the user's digital collection of
            Pokemon cards. When users create an account, they will be guided to
            a collection builder page, where they can search and add cards to
            their collection. The application was built using express, node, SQL, and handlebars.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
