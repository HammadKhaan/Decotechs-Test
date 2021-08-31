import React from "react"
import Avatar from '@material-ui/core/Avatar'
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Grid, makeStyles, Grow, Typography, Button } from '@material-ui/core'
import Dummy from '../Images/dummyheader.png'
import { ImageSearch } from "@material-ui/icons"

const useStyles = makeStyles(theme => ({
    header: {
        //   height: "400px",
        //  background: "linear-gradient(90deg,#94bbe9,#4466df)",


    },
    image: {
        //  background: "linear-gradient(90deg,#94bbe9,#4466df)",
        //paddingTop: "40px",
        paddingLeft: "100px",


    }
}))


const Header = () => {
    const classes = useStyles();
    const CButton=({name})=> (<Button variant="contained" color="primary" style={{ marginTop: "40px", marginLeft: "30px", width: "180px", height: "50px", backgroundColor: "#394b54" }}>
        {name}
    </Button>
    
    )

    return (
        <div className={classes.header}>
            <Grid container>


                <Grid item lg={6}>
                    <Typography variant="h3" color="initial" style={{ paddingTop: "40px", paddingLeft: "30px", color: "white" }}>
                        The latest online platform, within your reach.

                    </Typography>
                    <br />
                    <Typography variant="subtitle1" color="initial" style={{ color: "white", marginLeft: "30px" }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam praesentium earum
                        eligendi suscipit provident! Earum laudantium vel esse minima mollitia.
                    </Typography>
                    {["Admin","Teacher","Student"].map(i=><CButton name={i}/>)}
                </Grid>
                <div className={classes.image}>
                    <Grid item lg={6}>  <img src={Dummy} alt="" style={{ width: "500px", height: "320px" }} /> </Grid>

                </div>

            </Grid>

        </div>



    )
}


export default Header