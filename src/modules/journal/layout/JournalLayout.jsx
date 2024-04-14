import { Box } from '@mui/material';
import { Navbar } from '../components';

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Navbar drawerWidth={drawerWidth} />
            {/* Sidebar */}
            <Box
                component='main'
                sx={{ flexGrow: 1, padding: 3 }}
            >
                {/* {Toolbar} */}
                {children}
            </Box>
        </Box>
    );
};
