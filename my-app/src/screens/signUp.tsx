import React from 'react';
import { Container } from '../components/styles';
import SignUpForm from '../components/signUpForm';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

function SignUp() {
  return (
    <Container>
      <Header />
      <SignUpForm />
      <Footer />
    </Container>
  );
}

export default SignUp;
