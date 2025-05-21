import React, {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
  } from 'react';
  import { Alert } from 'react-native';
  import { authService } from '../service/auth';
  import SessionStorage from 'react-native-session-storage';
  
  // Tipos da autenticação
  export interface AuthData {
    token: string;
    email: string;
    name: string;
  }
  
  interface AuthContextData {
    authData?: AuthData;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    isLoading: boolean;
  }
  
  // Criação do contexto
  const AuthContext = createContext<AuthContextData>({} as AuthContextData);
  
  // Provider
  export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [authData, setAuthData] = useState<AuthData>();
    const [isLoading, setIsLoading] = useState(true);
  
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
        const message =
          error instanceof Error ? error.message : 'Tente novamente';
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
  
    return (
      <AuthContext.Provider
        value={{ authData, signIn, signOut, isLoading }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  // Hook customizado
  export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  }
  