import React from 'react';
import { Container, ContentScreen, TitleContainer, TitleText } from '../components/styles';
import SignInForm from '../components/signInForm';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

function SignIn() {
  return (
    <Container>
      <Header />
      <ContentScreen>
        <TitleContainer>
          <TitleText>Login</TitleText>
        </TitleContainer>
        <SignInForm />
      </ContentScreen>
      <Footer />
    </Container>
  );
}

export default SignIn;
