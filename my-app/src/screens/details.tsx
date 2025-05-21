import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { Container } from './style';

function Details() {
  const navigation = useNavigation();

  return (
    <Container>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button onPress={() => navigation.goBack()}>Go back</Button>
        <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
      </View>
    </Container>
  );
}
export default Details;
