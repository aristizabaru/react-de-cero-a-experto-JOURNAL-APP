import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from './journalSlice';
import { loadNotes } from '../../modules/journal/helpers';

export const startNewNote = () => {
    return async ( dispatch, getState ) => {

        dispatch( savingNewNote() );

        // getState viene como parámetro en los thunks para acceder al estado
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        };

        const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes` ) );
        await setDoc( newDoc, newNote );

        // Se crea el id de la nota con el id generado en Firebase para la entrada
        newNote.id = newDoc.id;

        // Actualización de store
        dispatch( addNewEmptyNote( newNote ) );
        dispatch( setActiveNote( newNote ) );

    };
};

export const startLoadingNotes = () => {
    return async ( dispatch, getState ) => {

        const { uid } = getState().auth;
        if ( !uid ) throw new Error( 'El UID del usuario no existe' );

        const notes = await loadNotes( uid );

        dispatch( setNotes( notes ) );

    };
};