import { Container, ContentScreen } from '../components/styles';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { TabsKanbanView } from '../components/tabsKanbanView';

function Details() {
  return (
    <Container>
      <Header />
      <ContentScreen>
        <TabsKanbanView />
      </ContentScreen>
      <Footer />
    </Container>
  );
}
export default Details;
