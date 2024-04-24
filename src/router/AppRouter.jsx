import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthRoutes } from '../modules/auth/routes/AuthRoutes';
import { JournalRoutes } from '../modules/journal/routes/JournalRoutes';

import { CheckingAuth } from '../modules/shared/ui';
import { useCheckAuth } from '../modules/shared/hooks';

export const AppRouter = () => {

    const { status } = useCheckAuth();

    if ( status === 'checking' ) {
        return <CheckingAuth />;
    }

    return (
        <Routes>

            { ( status === 'authenticated' )
                ? <Route path='*' element={ <JournalRoutes /> } />
                : <Route path='auth/*' element={ <AuthRoutes /> } />
            }

            <Route path='/*' element={ <Navigate to='/auth/login' /> } />

            {/* Login y registro */ }
            {/* <Route path='auth/*' element={ <AuthRoutes /> } /> */ }

            {/* Journal App */ }
            {/* <Route path='*' element={ <JournalRoutes /> } /> */ }

        </Routes>
    );
};
