import { useNavigation } from '@react-navigation/native';
import { Container } from '../components/styles';
import TaskForm from '../components/taskForm';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Button } from '../components/button';

function Home() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header />
      <TaskForm />
      <Button onPress={() => navigation.navigate('Details')} title={'Go to Details'} />
      <Footer />
    </Container>
  );
}
export default Home;
