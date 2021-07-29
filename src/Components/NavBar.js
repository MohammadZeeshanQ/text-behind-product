import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { AppBar, Toolbar, SwipeableDrawer, List, ListItem, Divider, Typography, Button, IconButton } from '@material-ui/core'

// Icons
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import PolymerIcon from '@material-ui/icons/Polymer';


const useStyles = makeStyles({
    root: {
        backgroundColor: '#9B857C',
    },

    wrapper: {
        width: '80%',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        '@media(max-width: 726px)': {
            width: '90%',
        },

    },

    logoContainer: {
        flexGrow: 1,
    },

    logo: {
        display: 'flex',
        alignItems: 'center',
        letterSpacing: '2px',
    },

    tabContainer: {
        flexGrow: 5,

        '@media(max-width: 726px)': {
            display: 'none',
        },
    },

    tab: {
        border: 'none',
        textTransform: 'none',
        color: '#fcfcfc',
        letterSpacing: '2px',
        margin: '0 0.5rem',

        '&:hover': {
            backgroundColor: '#D6B89B',
            color: '#fcfcfc',
            transition: 'all .3s ease-in-out',
        },
    },

    iconContainer: {

        '@media(max-width: 726px)': {
            display: 'none',
        },
    },

    iconButton: {
        margin: '0 .3rem',

        '&:hover': {
            backgroundColor: '#D6B89B',
            color: '#fcfcfc',
            transition: 'all .3s ease-in-out',
        },
    },

    icon: {
        color: '#fcfcfc',
        fontSize: '1.8rem',
        // margin: '0 1rem',
    },


    mobileTabContainer: {
        display: 'none',

        '@media(max-width: 726px)': {
            display: 'block',
        },
    },

    paper: {
        width: 290,
        border: '2rem 0 0 2rem',
        backgroundColor: '#9B857C',
    },

});

export default function NavBar() {

    const classes = useStyles();
    const [drawer, setDrawer] = useState(false);

    const drawerHandler = () => {
        setDrawer(!drawer);
    }

    return (
        <div>
            <AppBar className={classes.root} elevation={0} >
                <Toolbar className={classes.wrapper}>

                    <div className={classes.logoContainer}>

                        <Typography className={classes.logo} variant='h5'>
                            <PolymerIcon style={{ fontSize: '2rem', marginRight: '.3rem', }} />
                            CUBE
                        </Typography>
                    </div>

                    <div className={classes.tabContainer}>
                        <Button className={classes.tab}>Bike</Button>
                        <Button className={classes.tab}>Wear</Button>
                        <Button className={classes.tab}>Equipment</Button>
                    </div>

                    <div className={classes.iconContainer}>
                        <IconButton className={classes.iconButton}>
                            <SearchOutlinedIcon className={classes.icon} />
                        </IconButton>
                        <IconButton className={classes.iconButton}>
                            <LocalMallOutlinedIcon className={classes.icon} />
                        </IconButton>
                        <IconButton className={classes.iconButton} >
                            <PermIdentityOutlinedIcon className={classes.icon} />
                        </IconButton>
                    </div>

                    <div className={classes.mobileTabContainer}>
                        <IconButton className={classes.iconButton} onClick={drawerHandler} >
                            <LocalMallOutlinedIcon className={classes.icon} />
                        </IconButton>

                        <IconButton className={classes.iconButton} onClick={drawerHandler} >
                            <MenuOutlinedIcon className={classes.icon} />
                        </IconButton>
                    </div>

                </Toolbar>
            </AppBar>

            <SwipeableDrawer
                anchor='right'
                open={drawer}
                onOpen={drawerHandler}
                onClose={drawerHandler}
                classes={{ paper: classes.paper }}
            >
                <List >
                    <ListItem style={{ justifyContent: 'flex-end' }}>
                        <IconButton style={{ color: '#fcfcfc', }} onClick={drawerHandler}>
                            <HighlightOffOutlinedIcon className={classes.icon} />
                        </IconButton>
                    </ListItem>
                    <Divider />

                    <ListItem>
                        <Button className={classes.tab} onClick={drawerHandler}>Bike</Button>
                    </ListItem>
                    <Divider />

                    <ListItem>
                        <Button className={classes.tab} onClick={drawerHandler}>Wear</Button>
                    </ListItem>
                    <Divider />

                    <ListItem>
                        <Button className={classes.tab} onClick={drawerHandler}>Equipment</Button>
                    </ListItem>
                    <Divider />

                </List>
            </SwipeableDrawer>

        </div>
    )
}
