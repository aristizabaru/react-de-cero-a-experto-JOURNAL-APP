import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from '../../firebase/providers';
import { clearNotesLogout } from '../journal/journalSlice';
import { checkingCredentials, logout, login } from "./authSlice";

export const checkingAuthentication = ( { email, password } ) => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );
    };
};

export const startGoogleSingIn = () => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );

        const response = await singInWithGoogle();

        if ( !response.ok ) return dispatch( logout( response ) );

        dispatch( login( response ) );
    };
};

export const startLoginWithEmailPassword = ( { email, password } ) => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );

        const response = await loginWithEmailPassword( { email, password } );

        if ( !response.ok ) return dispatch( logout( response ) );

        dispatch( login( response ) );
    };
};

export const startCreatingUserWithEmailPassword = ( { email, password, displayName } ) => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );

        const response = await registerUserWithEmailPassword( { email, password, displayName } );

        if ( !response.ok ) return dispatch( logout( response ) );

        dispatch( login( response ) );
    };
};

export const startLogout = () => {
    return async ( dispatch ) => {
        await logoutFirebase();

        dispatch( clearNotesLogout() );
        dispatch( logout() );
    };
};