import React, { PropsWithChildren, useEffect, useState, createContext } from 'react';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import { lightTheme } from './lightTheme';
import { darkTheme } from './darkTheme';
import SessionStorage from 'react-native-session-storage';

export enum ThemeType {
  light = 'light',
  dark = 'dark',
}

const themes = {
  [ThemeType.light]: lightTheme,
  [ThemeType.dark]: darkTheme,
};

interface ThemeContextData {
  theme: ThemeType;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextData>({
  theme: ThemeType.light,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(ThemeType.dark);

  useEffect(() => {
    loadTheme();
  }, []);

  function loadTheme() {
    try {
      const savedTheme = SessionStorage.getItem('@theme');
      if (savedTheme === ThemeType.light || savedTheme === ThemeType.dark) {
        setTheme(savedTheme);
      }
    } catch (error) {
      console.error('Erro ao carregar o tema do MMKV:', error);
    }
  }

  function toggleTheme() {
    const newTheme = theme === ThemeType.light ? ThemeType.dark : ThemeType.light;
    try {
     SessionStorage.setItem('@theme', newTheme);
      setTheme(newTheme);
    } catch (error) {
      console.error('Erro ao salvar o tema no MMKV:', error);
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProviderStyled theme={themes[theme]}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};
