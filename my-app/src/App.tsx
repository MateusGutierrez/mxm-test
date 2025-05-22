import * as React from 'react';
import { Router } from './routes/router';
import { ThemeProvider } from './theme/theme';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export default function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  );
}
