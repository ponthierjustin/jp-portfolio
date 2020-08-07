import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
      padding: theme.spacing(2),
      fontFamily: "Sora"
    }
  }));
  
  export default function CenteredGrid() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
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
      </div>
    );
  }
  