import { Routes, Route } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';

export const AppRouter = () => {
    return (
        <Routes>

            {/* Login y registro */}
            <Route path='auth/*' element={<AuthRoutes />} />

            {/* Journal App */}
            <Route path='*' element={<JournalRoutes />} />

        </Routes>
    );
};
