import { useForm, Controller } from 'react-hook-form';
import { SignUpSchema, TSignUpFormValue } from '../schemas/signUp';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { Button } from './button';
import { Input } from './input';
import { ErrorText, FormContainer } from './styles';
import { useNavigation } from '@react-navigation/native';

const SignUpForm = () => {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUpFormValue>({
    resolver: zodResolver(SignUpSchema),
  });

  const submit = useCallback((data: TSignUpFormValue) => {
    console.log(data);
  }, []);

  return (
    <FormContainer>
      {/* Name */}
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Input placeholder="Name" onBlur={onBlur} onChangeText={onChange} value={value} />
            {errors.name && <ErrorText>{errors.name.message || 'Name is required.'}</ErrorText>}
          </>
        )}
      />

      {/* Email */}
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

      {/* Password */}
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Input
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

      {/* Confirm Password */}
      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Input
              secureTextEntry
              placeholder="Confirm Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors.confirmPassword && (
              <ErrorText>
                {errors.confirmPassword.message || 'Please confirm your password.'}
              </ErrorText>
            )}
          </>
        )}
      />

      {/* Submit & Navigate */}
      <Button title="Cadastrar" onPress={handleSubmit(submit)} />
      <Button
        title="Ir para login"
        onPress={() => navigation.navigate('SignIn')}
        style={{ marginTop: 16 }}
      />
    </FormContainer>
  );
};

export default SignUpForm;
