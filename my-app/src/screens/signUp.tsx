import React from 'react';
import { Container, ContentScreen, TitleContainer, TitleText } from '../components/styles';
import SignUpForm from '../components/signUpForm';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

function SignUp() {
  return (
    <Container>
      <Header />
      <ContentScreen>
        <TitleContainer>
          <TitleText>Sign Up</TitleText>
        </TitleContainer>
        <SignUpForm />
      </ContentScreen>
      <Footer />
    </Container>
  );
}

export default SignUp;
