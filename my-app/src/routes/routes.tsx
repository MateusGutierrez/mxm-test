import { useAuth } from '../context/auth';
import { AppStack } from './appStack';
import { AuthStack } from './authStack';

function Routes() {
  const auth = useAuth();
  return !auth.authData ? <AppStack /> : <AuthStack />;
}
export default Routes;
