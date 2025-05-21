import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../screens/signIn/signIn";
import Login from "../screens/login";

const Stack = createNativeStackNavigator();

export function AuthStack() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="SignIn" component={SignIn} options={{ title: 'SignIn'}}/>
            <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        </Stack.Navigator>
    )
}