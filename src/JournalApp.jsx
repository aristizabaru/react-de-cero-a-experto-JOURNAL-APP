import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./modules/shared/theme";

export const JournalApp = () => {
    return (
        <AppTheme>
            <AppRouter />
        </AppTheme>
    );
};