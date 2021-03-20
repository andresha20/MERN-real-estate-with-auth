import logo from '../../Assets/logo.png';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import { AppBar, Typography, Toolbar, Button, Avatar, Menu, MenuItem } from '@material-ui/core'; 
import useStyles from './Styles';
import React, { useState, useEffect, useCallback } from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory, useLocation } from 'react-router-dom';

const NavBar = React.memo(() => {

    const { user, setUser } = useGlobalContext();
    const history = useHistory();
    const classes = useStyles();
    const location = useLocation();

    const logout = () => {
        localStorage.clear();
        history.push('/');
        setUser(null);
    }

 
    useEffect(() => {
        // const token = user?.tokenId;
        console.log('Navbar rendered');
        setUser(JSON.parse(localStorage.getItem('profile')));

    }, [location]);

    return (
        <div className={classes.root}>
            <AppBar color='secondary'>
                <Toolbar>
                    <Link to='/'>
                        <img style={{ width: 120, height: 70 }} src={logo} alt='Real Estate'/>
                    </Link>
                    <Typography variant='h6'><Link className={classes.text} to='/about'>About</Link></Typography>
                    <Typography variant='h6'><Link className={`${classes.root} ${classes.text}`} to='/houses'>Houses</Link></Typography>
                    {user && (<><Avatar src={user.imageUrl} alt={user.name}/><Typography variant='h6' className={classes.text}>{user.name}</Typography></>)}
                    {user && (<Button className={classes.text} variant='outlined' onClick={logout}>Log out</Button>)}
                    
                    <Link className={classes.text} to='/login'><Button variant='contained' color='primary' size='small'>Sign in</Button></Link>
                    <Link className={classes.text} to='/houses/publish'><Button variant='contained' color='primary' size='small'>Publish</Button></Link>
                </Toolbar>
            </AppBar>
        </div>
    )
})

export default NavBar;