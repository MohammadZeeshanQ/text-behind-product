import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'

// Picture
import Bike1 from '../../Assets/Bike/green.png'
import Bike2 from '../../Assets/Bike/red.png'
import Bike3 from '../../Assets/Bike/yellow.png'
import Bike4 from '../../Assets/Bike/pink.png'


// Icons
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';

const useStyles = makeStyles({
    root: {

    },

    wrapper: {
        position: 'relative',
        width: '80%',

        '@media(max-width: 726px)': {
            width: '90%',
        },
    },


});





export default function Hero() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>

            </div>
        </div>
    )
}
