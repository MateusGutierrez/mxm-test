import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { Container } from '../components/styles';

function Home() {
  const navigation = useNavigation();

  return (
    <Container>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button onPress={() => navigation.navigate('Details')}>Go to Details</Button>
      </View>
    </Container>
  );
}
export default Home;
