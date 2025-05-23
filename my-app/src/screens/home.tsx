import { Container, ContentScreen, HeaderButtonsContainer, TitleText } from '../components/styles';
import TaskForm from '../components/taskForm';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { ButtonSecondary } from '../components/button';
import { useNavigation } from '@react-navigation/native';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

function Home() {
  const { navigate } = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        <Header />
        <HeaderButtonsContainer>
          <TitleText>Crie tarefas aqui!</TitleText>
          <ButtonSecondary onPress={() => navigate('Details')} title={'Lista de tarefas'} />
        </HeaderButtonsContainer>
        <ContentScreen>
          <TaskForm />
        </ContentScreen>
        <Footer />
      </Container>
    </TouchableWithoutFeedback>
  );
}
export default Home;
