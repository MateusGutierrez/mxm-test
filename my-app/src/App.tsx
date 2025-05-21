import * as React from 'react';
import { Router } from './routes/router';
import { ThemeProvider } from './theme/theme';
import { AuthProvider } from './context/auth';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router/>
      </AuthProvider>
    </ThemeProvider>
  );
}