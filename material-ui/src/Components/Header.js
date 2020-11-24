import { AppBar, Badge, Grid, IconButton, InputBase, Toolbar } from '@material-ui/core'
import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatBubbleOutlineTwoToneIcon from '@material-ui/icons/ChatBubbleOutlineTwoTone';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import {makeStyles, withStyles} from '@material-ui/core';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';



const useStyles = makeStyles({
    root: {
        backgroundColor: '#FFF',
        transform: 'translateZ(0)'
    },
    searchInput:{
        opacity:'0.6',
        padding: '0px 8px',
        fontSize: '0.8rem',
        '&:hover':{
            backgroundColor:'#f2f2f2'
        },
        '& .MuiSvgIcon-root':{
            marginRight: '8px'
        }
    }
})
export default function Header() {
    const classes = useStyles();

    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item>
                        <InputBase
                            className={classes.searchInput}
                            placeholder="search"
                            startAdornment={<SearchTwoToneIcon fontSize='small'/>}
                        />
                    </Grid>
                    <Grid item sm={true}></Grid>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color='secondary'>
                                <NotificationsIcon
                                fontSize='small'
                                 />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color='primary'>
                                <ChatBubbleOutlineTwoToneIcon
                                fontSize='small'
                                />
                            </Badge>
                        </IconButton>
                        <IconButton>
                                <ExitToAppTwoToneIcon
                                fontSize='small'
                                />
                        </IconButton>

                    </Grid>

                </Grid>
            </Toolbar>
            
        </AppBar>
    )
}
