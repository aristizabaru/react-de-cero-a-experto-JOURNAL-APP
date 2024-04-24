import { useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Grid, Typography, TextField, Button, Link, Alert } from "@mui/material";
import { Google } from "@mui/icons-material";

import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../shared/hooks/useForm";
import { startGoogleSingIn, startLoginWithEmailPassword } from "../../../store/auth";

const formData = {
    email: 'andres.aristizabal@gmail.com',
    password: '123456',
};

export const LoginPage = () => {

    const { status, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm( formData );

    const isAuthenticated = useMemo( () => status === 'checking', [ status ] );

    const onSubmit = ( event ) => {
        event.preventDefault();

        dispatch( startLoginWithEmailPassword( { email, password } ) );

    };

    const onGoogleSingIn = () => {
        dispatch( startGoogleSingIn() );
    };

    return (
        <AuthLayout title="Login">
            <form
                onSubmit={ onSubmit }
                className='animate__animated animate__fadeIn animate__faster'
            >
                <Grid container>
                    <Grid item xs={ 12 } sx={ { marginTop: 2 } }>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                            name='email'
                            value={ email }
                            onChange={ onInputChange }
                        />
                    </Grid>
                    <Grid item xs={ 12 } sx={ { marginTop: 2 } }>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="contraseña"
                            fullWidth
                            name='password'
                            value={ password }
                            onChange={ onInputChange }
                        />
                    </Grid>
                    {/* eslint-disable-next-line no-extra-boolean-cast */ }
                    <Grid container display={ !!errorMessage ? '' : 'none' }
                        sx={ { mt: 2 } }>
                        <Grid item xs={ 12 } >
                            <Alert severity='error'>
                                { errorMessage }
                            </Alert>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        spacing={ 2 }
                        sx={ { marginBottom: 2, marginTop: 1 } }
                    >
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button
                                disabled={ isAuthenticated }
                                type="submit"
                                variant="contained"
                                fullWidth
                            >
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button
                                disabled={ isAuthenticated }
                                onClick={ onGoogleSingIn }
                                variant="contained"
                                fullWidth
                            >
                                <Google />
                                <Typography sx={ { marginLeft: 1 } }>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent="end">
                        <Link
                            component={ RouterLink }
                            color="inherit"
                            to="/auth/register"
                        >
                            Crear una cuenta
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
