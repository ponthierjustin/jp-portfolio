import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//Header
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    flexGrow: 1,
    fontFamily: "Sora"
  },
  button: {
    padding: theme.spacing(2),
    fontFamily: "Sora"
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <Toolbar>
          <Typography variant="h1" className={classes.title}>
            Justin Ponthier
          </Typography>
        <Button className={classes.button}>
        About
        </Button>
          <Button className={classes.button}>
        Resume
        </Button>
        <Button className={classes.button}>
        Contact 
       </Button>
       
       <IconButton edge="start"  color="inherit"  target="_blank" href="https://github.com/ponthierjustin" >
            <GitHubIcon className={classes.button} fontSize="large" />
          </IconButton>
          
          <IconButton edge="start" color="inherit" target="_blank" href="https://www.linkedin.com/in/justin-ponthier-1509a8174/">
            <LinkedInIcon className={classes.button} fontSize="large"/>
          </IconButton>
        </Toolbar>
        </Grid>
       
        <Grid item xs={6}>
          <Paper className={classes.paper}>Bio</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Projects</Paper>
        </Grid>
        <Grid item xs={3} >
        <Paper className={classes.paper}>Bio</Paper>
        </Grid>
        <Grid item xs={3}  >
        <Paper className={classes.paper}>Bio</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Graph</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Graph</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

