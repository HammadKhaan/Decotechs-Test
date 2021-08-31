import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../Images/dummylogogreen.png';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#253036",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginLeft: "100px",
    //float: "right",
  },

}));

export default function Navbar() {
  const classes = useStyles();
  const Main = () => {
      return (
        <Typography variant="p" className={classes.title}>
                Lorem
          </Typography>
      );
  }

  return (
    <div className={classes.root} style={{paddingTop:"0px",}}>            
      <AppBar position="static" >
        <Toolbar style={{height:"50px", backgroundColor: "#253036", paddingTop:"20px",}}>
            <Grid container>
           <Grid item lg={3}> <img src={Logo} alt="" style={{height:"50px", width:"170px", }} />   </Grid>


           
           <Grid item lg={9}>
          
          {[0,0,0,0].map(i=> <Main/>)}
          
        
          <Button color="inherit" variant="contained" style={{backgroundColor: "#009933"}} className={classes.title}>Lorem Ipsum</Button>

          </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
