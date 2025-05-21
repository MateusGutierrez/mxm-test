import { z } from 'zod';

export const SignInSchema = z.object({
  email: z.string().email('O e-mail é obrigatório'),
  password: z.string().min(5, 'A senha é obrigatória e precisa de no mínimo 6 caracteres'),
});

export type TSignInFormValue = z.infer<typeof SignInSchema>;
