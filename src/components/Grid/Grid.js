import React from 'react';
import NavBar from '../Navbar/Navbar'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontFamily: "Sora",
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <NavBar />
       </Grid>
        <Grid item xs={6}>
        <Typography variant="h5" className={classes.title}>
          <Paper className={classes.paper}>Motivated individual with Full-Stack Web Development skills looking forward to new opportunities, learning environments, and building creative platforms. Thriving in a fast-paced, team-based environment. Driven and proven successful at achieving established targets and team goals. Personable and professional communicator. Seeking a role in the Computer Programming  field to build upon my core skill base leading to additional responsibilities.
              </Paper>
              </Typography>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Projects</Paper>
        </Grid>
        <Grid item xs={3} >
        <Paper className={classes.paper}> Project</Paper>
        </Grid>
        <Grid item xs={3}  >
        <Paper className={classes.paper}> Project</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Project</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Project</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

