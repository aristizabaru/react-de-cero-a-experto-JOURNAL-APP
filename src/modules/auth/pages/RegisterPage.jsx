import { Link as RouterLink } from "react-router-dom";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from '../../shared/hooks';
import { useState } from 'react';

const formData = {
    displayName: '',
    email: '',
    password: '',
};

const formValidations = {
    email: [ ( value ) => value.includes( '@' ), 'El correo debe tener una @' ],
    password: [ ( value ) => value.length >= 6, 'El password debe tener más de 6 letras' ],
    displayName: [ ( value ) => value.length >= 1, 'El nombre es obligatorio' ],
};

export const RegisterPage = () => {

    const [ formSubmitted, setFormSubmitted ] = useState( false );

    const {
        formState, displayName, email, password,
        formValid, displayNameValid, emailValid, passwordValid,
        onInputChange,
    } = useForm( formData, formValidations );

    const onSubmit = ( event ) => {
        event.preventDefault();
        setFormSubmitted( true );
        console.log( formState );
    };

    return (
        <AuthLayout title="Crear cuenta">
            <form onSubmit={ onSubmit }>
                <Grid container>
                    <Grid item xs={ 12 } sx={ { marginTop: 2 } }>
                        <TextField
                            label="Nombre completo"
                            type="text"
                            placeholder="Nombre completo"
                            fullWidth
                            name='displayName'
                            value={ displayName }
                            onChange={ onInputChange }
                            error={ !!displayNameValid && formSubmitted }
                            helperText={ displayNameValid }
                        />
                    </Grid>
                    <Grid item xs={ 12 } sx={ { marginTop: 2 } }>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                            name='email'
                            value={ email }
                            onChange={ onInputChange }
                            error={ !!emailValid && formSubmitted }
                            helperText={ emailValid }
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
                            error={ !!passwordValid && formSubmitted }
                            helperText={ passwordValid }
                        />
                    </Grid>
                    <Grid
                        container
                        spacing={ 2 }
                        sx={ { marginBottom: 2, marginTop: 1 } }
                    >
                        <Grid item xs={ 12 }>
                            <Button
                                type='submit'
                                variant="contained"
                                fullWidth
                            >
                                Crear cuenta
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent="end">
                        <Typography sx={ { marginRight: 1 } }>¿Ya tienes cuenta?</Typography>
                        <Link
                            component={ RouterLink }
                            color="inherit"
                            to="/auth/login"
                        >
                            Ingresar
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
