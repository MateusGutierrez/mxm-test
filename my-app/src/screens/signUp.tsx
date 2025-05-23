import React from 'react';
import { Container, ContentScreen, TitleContainer, TitleText } from '../components/styles';
import SignUpForm from '../components/signUpForm';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

function SignUp() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        <Header />
        <ContentScreen>
          <TitleContainer>
            <TitleText>Cadastre-se</TitleText>
          </TitleContainer>
          <SignUpForm />
        </ContentScreen>
        <Footer />
      </Container>
    </TouchableWithoutFeedback>
  );
}

export default SignUp;
