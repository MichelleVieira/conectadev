import React from 'react'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Tollbar from '@material-ui/core/Toolbar'
import SvgIcon from '@material-ui/core/SvgIcon'
import { Bell } from 'react-feather'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none',
    },

    img: {
        maxHeight: 55,
    },

    grow: {

        flexGrow: 1

    },

    userSection: {
        display: 'flex',
        alignItems: 'center'
    },

    button: {
        marginRight: '10px'
    },

    bell: {
        marginRight: '10px',
    }


})


function Header() {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} position='fixed' color='inherit' >
            <Tollbar>
                <img className={classes.img} src='/images/logo.png' />
                <div className={classes.grow}></div>
                <div className={classes.userSection}>
                    <Button className={classes.button} color='primary' variant='contained'>Novo Post</Button>

                    <SvgIcon className={classes.bell}>
                        <Bell ></Bell>
                    </SvgIcon>
                    <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
                </div>
                {/* <div className=''>
                    <a href='/'>Conecta Dev</a>
                </div>
                <div className=''>
                    <Button color='primary' variant='contained'>Novo Post</Button>
                    <span>img1</span>
                    <span>img2</span>

                </div> */}
            </Tollbar>
        </AppBar>
    )
}

export default Header