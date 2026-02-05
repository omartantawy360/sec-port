import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
import { AppProvider } from '@/context/AppContext';
import { TeamProvider } from '@/context/TeamContext';
import { ThemeProvider } from '@/components/theme-provider';
import { AppRoutes } from './routes';
import { Toaster } from '@/components/ui/sonner';

export default function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <TeamProvider>
          <ThemeProvider defaultTheme="dark" storageKey="techcompete-theme">
            <BrowserRouter basename={import.meta.env.BASE_URL}>
              <AppRoutes />
              <Toaster />
            </BrowserRouter>
          </ThemeProvider>
        </TeamProvider>
      </AppProvider>
    </AuthProvider>
  );
}
