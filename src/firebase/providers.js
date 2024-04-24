import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
    try {
        const response = await signInWithPopup( FirebaseAuth, googleProvider );
        // Obtiene el token para verificar del lado de Google
        // const credentials = GoogleAuthProvider.credentialFromResult( response );
        const { displayName, email, photoURL, uid } = response.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
        };

    } catch ( error ) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorCode,
            errorMessage,
        };
    }
};

export const loginWithEmailPassword = async ( { email, password } ) => {
    try {
        const response = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        const { displayName, photoURL, uid } = response.user;

        return {
            ok: true,
            displayName,
            photoURL,
            uid,
            email,
        };

    } catch ( error ) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorCode,
            errorMessage,
        };
    }
};

export const registerUserWithEmailPassword = async ( { email, password, displayName } ) => {
    try {
        const response = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL } = response.user;

        await updateProfile( FirebaseAuth.currentUser, { displayName } );

        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName,
        };

    } catch ( error ) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorCode,
            errorMessage,
        };
    }
};

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
};