import { useForm, Controller } from 'react-hook-form';
import { SignUpSchema, TSignUpFormValue } from '../schemas/signUp';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { Button, ButtonSecondary } from './button';
import { Input } from './input';
import { ErrorText, FormContainer } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/auth';
import { Alert } from 'react-native';

const SignUpForm = () => {
  const { navigate } = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUpFormValue>({
    resolver: zodResolver(SignUpSchema),
  });
  const { signUp } = useAuth();
  const submit = useCallback(
    async (data: TSignUpFormValue) => {
      try {
        await signUp(data.name, data.password, data.password);
        navigate('SignIn');
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Tente novamente';
        Alert.alert('Erro ao entrar', message);
      }
    },
    [navigate, signUp]
  );

  return (
    <FormContainer>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Input placeholder="Nome" onBlur={onBlur} onChangeText={onChange} value={value} />
            {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
          </>
        )}
      />
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Input
              keyboardType="email-address"
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          </>
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Input
              secureTextEntry
              placeholder="Senha"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
          </>
        )}
      />
      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Input
              secureTextEntry
              placeholder="Confirme sua senha"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors.confirmPassword && <ErrorText>{errors.confirmPassword.message}</ErrorText>}
          </>
        )}
      />

      <Button title="Cadastrar" onPress={handleSubmit(submit)} />
      <ButtonSecondary
        title="Voltar"
        onPress={() => navigate('SignIn')}
        style={{ marginTop: 16 }}
      />
    </FormContainer>
  );
};

export default SignUpForm;
