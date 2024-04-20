import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { Google } from "@mui/icons-material";

import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../shared/hooks/useForm";
import { checkingAuthentication, startGoogleSingIn } from "../../../store/auth";

export const LoginPage = () => {

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm({
        email: 'andres.aristizabal@gmail.com',
        password: '123456',
    });

    const onSubmit = (event) => {
        event.preventDefault();

        dispatch(checkingAuthentication({ email, password }));
        console.log({ email, password });
    };

    const onGoogleSingIn = () => {
        dispatch(startGoogleSingIn());
    };

    return (
        <AuthLayout title="Login">
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                            name='email'
                            value={email}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: 2 }}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="contraseña"
                            fullWidth
                            name='password'
                            value={password}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid
                        container
                        spacing={2}
                        sx={{ marginBottom: 2, marginTop: 1 }}
                    >
                        <Grid item xs={12} sm={6}>
                            <Button type="submit" variant="contained" fullWidth>Login</Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button onClick={onGoogleSingIn} variant="contained" fullWidth>
                                <Google />
                                <Typography sx={{ marginLeft: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent="end">
                        <Link
                            component={RouterLink}
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
