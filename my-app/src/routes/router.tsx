import { NavigationContainer } from "@react-navigation/native";
import { AppStack } from "./appStack";
import { AuthStack } from "./authStack";
import { useAuth } from "../context/auth";

export function Router() {
    const auth = useAuth()
    return (
        <NavigationContainer>
            {auth.authData ? <AppStack/> : <AuthStack/>}
        </NavigationContainer>
    )
}