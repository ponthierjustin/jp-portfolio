import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Link, useLocation } from "react-router-dom";
import Grow from "@material-ui/core/Grow";
import Box from "@material-ui/core/Box";

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

const Contact = () => {
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
          <Box component="span" m={1}>
          <Typography variant="h2" className={classes.paper}>
            Get in touch!
          </Typography>
            <Typography variant="h4" className={classes.paper}>
              Email: ponthierjustin@gmail.com
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
