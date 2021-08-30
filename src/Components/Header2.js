import React from "react"
import Avatar from '@material-ui/core/Avatar'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Grid, makeStyles, Grow, Typography, Button, Divider } from '@material-ui/core'
import Dummy from '../Images/dummyheader.png'
import { ImageSearch } from "@material-ui/icons"

const useStyles = makeStyles(theme => ({
    header: {
        height: "320px",
        background: "#394b54",
        marginTop: "40px"


    },
    image: {
        //  background: "linear-gradient(90deg,#94bbe9,#4466df)",
        //paddingTop: "40px",
        //paddingLeft: "100px",


    }
}))

const Header = () => {
    const classes = useStyles();


    return (

        <div>
        <Grid container style={{marginTop: "80px"}}>
        <Grid item lg={12} style={{ color: "white", textAlign: "center" }}>
            <Typography variant="subtitle1" color="initial" style={{ color: "#009933" }}>Lorem</Typography>
            <Divider orientation="vertical" flexItem style={{ backgroundColor: "#009933", height: "5px", width: "15%", marginLeft: "580px", marginTop: "10px", marginBottom: "10px" }} />
            <Typography variant="h5" color="initial">EXPLORE OUR RESOURCES </Typography>
        </Grid>
    </Grid>   
        
        
        <div className={classes.header}>
            <Grid container>

            <div className={classes.image}>
                    <Grid item lg={6}>  <img src={Dummy} alt="" style={{ width: "670px", height: "320px" }} /> </Grid>

                </div>


                <Grid item lg={6} style={{padding:"0px 40px 30px 20px"}}>
                    <Typography variant="h5" color="initial" style={{ paddingTop: "40px", paddingLeft: "30px", color: "white" }}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam praesentium earum


                    </Typography>
                    <br />
                    <Typography variant="subtitle1" color="initial" style={{ color: "white", marginLeft: "30px" }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam praesentium earum
                        eligendi suscipit provident! Earum laudantium vel esse minima mollitia.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam praesentium earum

                    </Typography>
                    <Button variant="contained" color="primary" style={{ marginTop: "20px", marginLeft: "30px", width: "180px", height: "50px", backgroundColor: "#009933" }}>
                        Lorem Ipsum
                    </Button>
                    

                </Grid>



                

            </Grid>

        </div>

        </div>

    )
}


export default Header