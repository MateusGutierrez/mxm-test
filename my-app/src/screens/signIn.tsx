import React from 'react';
import { Container, ContentScreen, TitleContainer, TitleText } from '../components/styles';
import SignInForm from '../components/signInForm';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

function SignIn() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
    </TouchableWithoutFeedback>
  );
}

export default SignIn;
