import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "../Button/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontFamily: "Sora",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12} sm={12}>
           <Typography variant="h5" className={classes.paper}>
             Justin Ponthier
           
          </Typography> 
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid container item xs={12} sm={12}>
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
