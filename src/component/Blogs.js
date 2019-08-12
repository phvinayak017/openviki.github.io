import React from 'react';
import BlogComponent from './BlogComponent';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Image1 from '../assets/Images/web.svg'
// import Image2 from '../assets/Images/prog2.svg'
// import Image3 from '../assets/Images/react.svg'
// import Image4 from '../assets/Images/webdev.svg'
import Image1 from '../assets/ProjectImages/project1.jpg'
import Image2 from '../assets/ProjectImages/Project2.jpg'
import Image3 from '../assets/ProjectImages/Project3.jpg'
import Image4 from '../assets/ProjectImages/Project4.jpg'

const useStyles = makeStyles({
    cardContainer: {
        flex: 1,
        marginRight: "1%",
        marginLeft: "-1%"

    },
    card: {
        // marginLeft: -40,
    }
});

function Blogs(props) {
    const classes = useStyles()
    return (
        <div>
            <Grid
                container
                justify="center"
                alignItems='center'
                className={classes.cardContainer}
            >
                <Grid item xs={4} >
                    <BlogComponent Image={Image1} />
                </Grid>
                <Grid item xs={4}>
                    <BlogComponent Image={Image2} />
                </Grid>
                <Grid item xs={4} >
                    <BlogComponent Image={Image3} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Blogs