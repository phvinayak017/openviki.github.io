import React, { Component } from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import Image from '../assets/Images/contact4.svg'
import Form from './Form';


const useStyles = makeStyles(theme => ({
    image: {
        maxWidth: "60%",
        height: "auto",
        marginTop: 150
    },
    formStyle: {
        marginLeft: 350,
        marginTop: 280,
    },
    detail: {
        marginTop: 25,
        marginLeft: 75
    },
    contact: {
        marginLeft: 35
    }
}))

function Contact() {
    const classes = useStyles()
    return (
        <div>
            <Grid container spacing={40}>
                <Grid item xs={5}>
                    <div className={classes.formStyle}>
                        <Typography variant="h2">
                            Drop me a mail
                        </Typography>
                        <div className={classes.detail}>
                            <Typography color="primary">
                                vinayak.hulabutti@gmail.com
                            </Typography><br />
                            <Typography className={classes.contact} color="primary">
                                +91-85539-12905
                            </Typography>
                        </div>
                        {/* <Form /> */}
                    </div>
                </Grid>
                <Grid item xs={7}>
                    <img className={classes.image} src={Image} alt="" />
                </Grid>

            </Grid>
        </div>
    )
}

export default Contact