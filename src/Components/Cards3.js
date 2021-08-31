import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Grid } from '@material-ui/core';
import Dummy from '../Images/dummyheader.png';
import Cards1 from '../Components/Cards1';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width: "300px",
    marginLeft: "20px",
    //heigth: "50px",
    backgroundColor: "#394b54",
    color: "white",
  },
  media: {
    height: 140,
//    color: "white",
    
    
  },
  text:{
    color: "white",

  }
});

export default function Cards3() {
  const classes = useStyles();

  return (


    <div style={{marginTop:"140px"}}>
        <Grid container >
        <Grid item lg={12} style ={{color:"white",textAlign:"center"}}>
        <Typography variant="subtitle1" color="initial" style={{color:"#009933"}}>Lorem</Typography>
        <Divider orientation="vertical" flexItem style={{backgroundColor:"#009933",height:"5px",width:"15%",marginLeft:"580px",marginTop:"10px",marginBottom:"10px"}}/>
        <Typography variant="h5" color="initial">LOREM IPSUM DOLAR SIT </Typography>
        </Grid>   
        </Grid>
    
    {/* <Grid container style={{marginTop:"80px"}}>
          
    </Grid> */}
    <Cards1 />

    </div>
  );
}
