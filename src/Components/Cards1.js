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
import Dummy from '../Images/dummyheader.png'


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

export default function Cards1() {
  const classes = useStyles();

  return (


    <div style={{marginTop:"140px"}}>
        <Grid container >
        <Grid item lg={12} style ={{color:"white",textAlign:"center"}}>
        <Typography variant="subtitle1" color="initial" style={{color:"#009933"}}>Lorem</Typography>
        <Divider orientation="vertical" flexItem style={{backgroundColor:"#009933",height:"5px",width:"15%",marginLeft:"580px",marginTop:"10px",marginBottom:"10px"}}/>
        <Typography variant="h5" color="initial">OUR DEGREE PROGRAMS </Typography>
        </Grid>   
        </Grid>
    
    <Grid container style={{marginTop:"80px"}}>
    <Grid item lg={3}> 
    <Card className={classes.root}>
        
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Dummy}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Lorem ipsum dolor sit amet consectetur 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
          Lorem ipsum dolor sit
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </Grid>

    <Grid item lg={3}> 
    <Card className={classes.root}>
        
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Dummy}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Lorem ipsum dolor sit amet consectetur
          </Typography>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </Grid>

    <Grid item lg={3}> 
    <Card className={classes.root}>
        
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Dummy}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Lorem ipsum dolor sit amet consectetur
          </Typography>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </Grid>

    <Grid item lg={3}> 
    <Card className={classes.root}>
        
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Dummy}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Lorem ipsum dolor sit amet consectetur
          </Typography>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
    </Grid>
    
    
    
    
    
    
    
    
    
    
    
    </Grid>
    </div>
  );
}
