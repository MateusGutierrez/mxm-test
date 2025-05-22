import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from '../context/auth';
import Routes from './routes';

export function Router() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
}
