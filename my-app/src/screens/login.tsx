import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { Container } from "./style";

function Login() {
  const navigation = useNavigation();

  return (
    <Container>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
        <Button onPress={() => navigation.navigate('SignIn')}>
          Go to Sign in
        </Button>
      </View>
    </Container>
  );
}
export default Login;