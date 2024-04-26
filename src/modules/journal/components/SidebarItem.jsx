import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../../store/journal';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';

// eslint-disable-next-line react/prop-types
export const SidebarItem = ( { title, body, id, date, imageUrls = [] } ) => {

    const dispatch = useDispatch();

    const newTitle = useMemo( () => {
        return title.length > 17
            ? title.substring( 0, 17 ) + '...'
            : title;
    }, [ title ] );

    const onClickNote = () => {
        dispatch( setActiveNote( { title, body, id, date, imageUrls } ) );
    };

    return (
        <ListItem disablePadding>
            <ListItemButton
                onClick={ onClickNote }
            >
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={ newTitle } />
                    <ListItemText secondary={ body } />
                </Grid>
            </ListItemButton>
        </ListItem>
    );
};
