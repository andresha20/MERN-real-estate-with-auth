import { useGlobalContext } from '../../../context';
import { useState } from 'react';
import { Container, Typography, Grid, Avatar, Paper, Button} from '@material-ui/core';
import useStyles from './Styles';
import GoogleLogin from 'react-google-login';
import Icon from './Icon';
import axios from 'axios';

import Input from './Input';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {

    const { user, setUser } = useGlobalContext();
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [showPassword, setIsPasswordVisible] = useState(false);
    const [userData, setUserData] = useState({ firstName: '', surname: '', email: '', password: '', confirmPassword: '' });
    const url = 'http://localhost:4000/users'
    const history = useHistory();
    const classes = useStyles();

    const handleSubmission = async (e) => {
        e.preventDefault();

        if (isSignedUp) {
            try {
                const { data } = await axios.post(`${url}/signup`, userData);
                console.log(data);
                localStorage.setItem('profile', JSON.stringify({ ...data.newUser, token: data.token }));
                return history.push('/');
            } catch (error) {
                console.log(error);
            }

        } else {
            try {
                const { data } = await axios.post(`${url}/signin`, userData);
                console.log(data);
                localStorage.setItem('profile', JSON.stringify({ ...data.result, token: data.token }));
                return history.push('/');
            } catch (error) {
                console.log(error);
            }
        }
    }

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const handleShowPassword = () => setIsPasswordVisible(password => !password);
    const switchFormType = () => setIsSignedUp(signUp => !signUp);

    const googleSuccessResponse = async (response) => {

        try {
            const { profileObj, tokenId } = await response;
            localStorage.setItem('profile', JSON.stringify({...profileObj, tokenId}));
            history.push('/');

        } catch (error) {
            console.log(error)
        }
    }

    const googleFailureResponse = async (response) => {
        console.log(response)
        console.log('An error ocurred')
    }
    

    return (
        <>
            <Container maxWidth='sm' className={classes.root}>
                <Paper elevation={5} align='center' className={classes.container}>
                        <Avatar></Avatar>
                        <Typography variant='h4'>{isSignedUp ? 'Sign up' : 'Sign in'}</Typography>
                        <form className={classes.form} onSubmit={handleSubmission}>
                            <Grid container spacing={2} >
                                {isSignedUp && (
                                <>
                                    <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half/>
                                    <Input name='surname' label='Surname' handleChange={handleChange} half/>
                                </>
                                )}
                                <Input name='email' label='Email Address' handleChange={handleChange} type='email'/>
                                <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} showPassword={handleShowPassword}/>
                                {isSignedUp && (
                                    <Input name='confirmPassword' label='Confirm your password' handleChange={handleChange} type='password'/>
                                    )}
                            </Grid>
                            <Button className={classes.button} fullWidth type='submit' color='primary' variant='contained'>{isSignedUp ? 'Sign up' : 'Sign in'}</Button>
                            <GoogleLogin 
                                clientId={process.env.REACT_APP_CLIENTID}
                                render={(renderProps) => (<Button className={classes.button} color='primary' fullWidth variant='contained' onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>}>{isSignedUp ? 'Google Sign up' : 'Google Sign in'}</Button>)}
                                onSuccess={googleSuccessResponse}
                                onFailure={googleFailureResponse}
                                cookiePolicy={'single_host_origin'}
                            />
                            <Button className={classes.button2} variant='text' onClick={switchFormType}><Typography variant='body2'>{isSignedUp ? 'Did you already register an account? Sign in!' : 'Not registered yet? Sign up!'}</Typography></Button>
                        </form>
                </Paper>
            </Container>
        </>
    )
}

export default LoginForm;