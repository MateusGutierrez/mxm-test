import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";

function Details() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button onPress={() => navigation.navigate('Details')}>
        Go to Details... again
      </Button>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
      <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
    </View>
  );
}
export default Details