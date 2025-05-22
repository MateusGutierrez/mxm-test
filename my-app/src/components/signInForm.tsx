import { Button } from './button';
import { Input } from './input';
import { ErrorText, FormContainer } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TSignInFormValue, SignInSchema } from '../schemas/signIn';
import { useCallback } from 'react';
import { useAuth } from '../context/auth';

const SignInForm = () => {
  const { navigate } = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignInFormValue>({
    resolver: zodResolver(SignInSchema),
  });
  const { signIn } = useAuth();
  const submit = useCallback(
    async (data: TSignInFormValue) => {
      await signIn(data.email, data.password);
    },
    [signIn]
  );
  return (
    <FormContainer>
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
            {errors.email && <ErrorText>{errors.email.message || 'Email is required.'}</ErrorText>}
          </>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Input
              keyboardType="default"
              secureTextEntry
              placeholder="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors.password && (
              <ErrorText>{errors.password.message || 'Password is required.'}</ErrorText>
            )}
          </>
        )}
      />

      <Button title="Login" onPress={handleSubmit(submit)} />
      <Button
        title="Go to sign up screen"
        onPress={() => navigate('SignUp')}
        style={{ marginTop: 16 }}
      />
    </FormContainer>
  );
};

export default SignInForm;
