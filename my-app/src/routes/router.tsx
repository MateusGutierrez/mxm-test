import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from '../context/auth';
import Routes from './routes';
import Toast from 'react-native-toast-message';

export function Router() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes />
        <Toast />
      </NavigationContainer>
    </AuthProvider>
  );
}
