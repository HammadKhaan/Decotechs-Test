import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Dummy from '../Images/dummyheader.png'
import { Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: "300px",
    height: "80px",
    backgroundColor: "#394b54",
    color: "white",
    marginLeft:"25px"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    color: "white"

  },
  cover: {
    width: 100,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function Explore() {
  const classes = useStyles();
  const theme = useTheme();
  const SCard = () => {
    return (
      <Grid item lg={3} > 
      <Card className={classes.root}>
      <CardMedia
          className={classes.cover}
          image={Dummy}
          title=""
        />
        
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h6" variant="h6">
              LOREM
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" style={{color:"white"}}>
              Lorem Ipsum
            </Typography>
          </CardContent>        
        </div>
      </Card>
      </Grid>
    );
  }

  return (
    <div style={{marginTop:"140px"}}>
        <Grid container >
        <Grid item lg={12} style ={{color:"white",textAlign:"center"}}>
        <Typography variant="subtitle1" color="initial" style={{color:"#009933"}}>Lorem</Typography>
        <Divider orientation="vertical" flexItem style={{backgroundColor:"#009933",height:"5px",width:"15%",marginLeft:"580px",marginTop:"10px",marginBottom:"10px"}}/>
        <Typography variant="h5" color="initial">EXPLORE OVEN COURSES CATEGORIES </Typography>
        </Grid>   
        </Grid>


    
    <Grid container style={{marginTop:"40px",marginLeft:"0px"}}>

    {[0,0,0,0].map(i=><SCard  />)}

    </Grid>
    
    </div>
  );
}
