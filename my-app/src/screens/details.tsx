import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { Container, ContentScreen, TitleContainer, TitleText } from '../components/styles';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { TabsKanbanView } from '../components/tabsKanbanView';

function Details() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header />
      <ContentScreen>
        <TitleContainer>
          <TitleText>Sign In</TitleText>
        </TitleContainer>
        <TabsKanbanView />
        <Button onPress={() => navigation.goBack()}>Go back</Button>
        <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
      </ContentScreen>
      <Footer />
    </Container>
  );
}
export default Details;
