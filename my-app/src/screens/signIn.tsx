import { useContext, useState } from "react";
import { Switch } from "react-native";
import { useAuth } from "../context/auth";
import { ThemeContext, ThemeType } from "../theme/theme";
import { Button } from "../components/button";
import { Input } from "../components/input"
import { Container } from "./style";

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signIn} = useAuth();
  const {toggleTheme, theme} = useContext(ThemeContext);

  const darkModeIsEnabled = theme === ThemeType.dark;

  return (
    <Container>
      <Switch value={darkModeIsEnabled} onValueChange={toggleTheme} />

      {/* <Image
        resizeMode="contain"
        source={logo}
        style={{width: 100, height: 100}}
      /> */}
      <Input placeholder="e-mail" value={email} onChangeText={setEmail} />
      <Input
        placeholder="senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button onPress={() => signIn(email, password)} title="Entrar no App" />
    </Container>
  );
}
export default SignIn;