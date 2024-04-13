import { AppRouter } from "./modules/router/AppRouter";
import { AppTheme } from "./modules/theme";

export const JournalApp = () => {
    return (
        <AppTheme>
            <AppRouter />
        </AppTheme>
    );
};