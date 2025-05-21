import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerBackVisible: false,
      }}
    >
      <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'SignUp' }} />
      <Stack.Screen name="SignIn" component={SignIn} options={{ title: 'SignIn' }} />
    </Stack.Navigator>
  );
}
