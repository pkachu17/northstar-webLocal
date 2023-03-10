import { Button, Card, CardActions, CardContent, CardHeader, Grow, TextField, InputAdornment, IconButton } from '@material-ui/core';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Email, Label } from '@material-ui/icons';
import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import './ForgotPasswordBlock.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../../firebase';
import { Routes } from '../../service/config';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Link from '@mui/material/Link';
import { sendPasswordReset } from '../../firebase';

const ForgotPasswordBlock = () => {
    const history = useHistory();
    const [email, setemail] = useState('');
    const [user, loading, error] = useAuthState(auth);


    const handleForgotPassword = () => {
        sendPasswordReset(email)
    };

    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) history.push("/");
    }, [user, loading]);


    return (
        <>
            <Toolbar />
            < Grow in={true} timeout={500} >
                <Box style={{ width: '100%', height: '83vh', paddingTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Card variant='outlined' className='CreateBoardCard' style={{ maxWidth: '600px', maxHeight: '800px' }}>
                        <CardHeader
                            className='LoginHeader'
                            title='Forgot Password'
                            titleTypographyProps={{ variant: 'h4' }}
                        />
                        <CardContent className='LoginContent'>
                            <TextField
                                className='LoginTextField'
                                required
                                id='filled-required'
                                label='Email ID'
                                placeholder='Enter Email ID'

                                variant='outlined'
                                onChange={(event: ChangeEvent<HTMLInputElement>) => setemail(event.target.value)}
                            />
                        </CardContent>


                        <CardActions className='LoginAction'>
                            <Button
                                type='submit'
                                variant='contained'
                                color='primary'
                                onClick={() => handleForgotPassword()}
                                className='LoginButton'>
                                Send Link
                            </Button>
                        </CardActions>

                        <CardContent className='LoginContent'>
                            <Link href="/Login">try Login?</Link>
                        </CardContent>
                    </Card>
                </Box>
            </Grow >
        </>
    );
};
export default ForgotPasswordBlock;
