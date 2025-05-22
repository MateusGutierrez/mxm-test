import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { authService } from '../service/auth';
import SessionStorage from 'react-native-session-storage';
import { TSignUpFormValue } from '../schemas/signUp';

export interface AuthData {
  token: string;
  email: string;
  name: string;
}

interface AuthContextData {
  authData?: AuthData;
  user?: Partial<TSignUpFormValue>;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<Partial<TSignUpFormValue>>();
  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData(): Promise<void> {
    try {
      const authDataSerialized = await SessionStorage.getItem('@AuthData');
      if (authDataSerialized) {
        const parsedData: AuthData = JSON.parse(authDataSerialized as string);
        setAuthData(parsedData);
      }
    } catch (error) {
      console.error('Erro ao carregar authData do SessionStorage:', error);
    } finally {
      setIsLoading(false);
    }
  }

  async function signIn(email: string, password: string): Promise<void> {
    try {
      const data = await authService.signIn(email, password);
      setAuthData(data);
      SessionStorage.setItem('@AuthData', JSON.stringify(data));
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Tente novamente';
      Alert.alert('Erro ao entrar', message);
    }
  }

  async function signOut(): Promise<void> {
    try {
      SessionStorage.removeItem('@AuthData');
      setAuthData(undefined);
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  }

  async function signUp(name: string, email: string, password: string): Promise<void> {
    try {
      const data = await authService.signUp(name, email, password);
      setUser(data);
    } catch (error) {
      console.log(error, 'quebrou no context');
      const message = error instanceof Error ? error.message : 'Tente novamente';
      Alert.alert('Erro ao entrar', message);
    }
  }
  return (
    <AuthContext.Provider value={{ authData, signIn, signOut, isLoading, user, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
