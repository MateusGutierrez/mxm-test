import * as Crypto from 'expo-crypto';
import SessionStorage from 'react-native-session-storage';
import { AuthData } from '../context/auth';
import { TSignUpFormValue } from '../schemas/signUp';

type MockedData = {
  hash: string;
  name: string;
};

export const hashPassword = async (password: string): Promise<string> => {
  return await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, password);
};

export const comparePassword = async (password: string, hashed: string): Promise<boolean> => {
  const hash = await hashPassword(password);
  return hash === hashed;
};

const signIn = (email: string, password: string): Promise<AuthData> => {
  return new Promise(async (resolve, reject) => {
    try {
      const stored = await SessionStorage.getItem('@MOCKED_PASSWORD');
      if (!stored) return reject(new Error('Usuário não encontrado'));
      const parsed: MockedData = JSON.parse(stored as string);

      if (!parsed.hash) {
        return reject(new Error('Usuário não encontrado'));
      }

      const passwordMatch = await comparePassword(password, parsed.hash);

      setTimeout(() => {
        if (passwordMatch) {
          resolve({
            token: JWTTokenMock,
            email,
            name: parsed.name,
          });
        } else {
          reject(new Error('Credenciais incorretas'));
        }
      }, 1000);
    } catch (error) {
      console.log(error);
      reject(new Error('Erro ao validar login'));
    }
  });
};

const signUp = async (
  name: string,
  email: string,
  password: string
): Promise<Partial<TSignUpFormValue>> => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashedPassword = await hashPassword(password);
      await SessionStorage.setItem(
        '@MOCKED_PASSWORD',
        JSON.stringify({ hash: hashedPassword, name })
      );
      setTimeout(() => {
        resolve({
          name,
          email,
          password: hashedPassword,
        });
      }, 1000);
    } catch (error) {
      console.log('quebrou aqui', error);
      reject(error);
    }
  });
};

export const authService = {
  signIn,
  signUp,
};

const JWTTokenMock =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikx1Y2FzIEdhcmNleiIsImlhdCI6MTUxNjIzOTAyMn0.oK5FZPULfF-nfZmiumDGiufxf10Fe2KiGe9G5Njoa64';
