import React, { useCallback, useContext } from 'react';
import styled from 'styled-components/native';
import { ThemeContext, ThemeType } from '../theme/theme';
import { ThemeToggleSwitch } from './themeButton';
import { useAuth } from '../context/auth';
import { TouchableOpacity } from 'react-native';
import SessionStorage from 'react-native-session-storage';
import Toast from 'react-native-toast-message';
import { Feather } from '@expo/vector-icons';

const HeaderContainer = styled.View`
  padding: 16px;
  display: flex;
  width: 100%;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.popover};
`;

const LogoText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const IconButton = styled(TouchableOpacity)`
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.destructive};
  border-radius: ${({ theme }) => theme.space.default}px;
`;

export const HeaderButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const Header = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const darkModeIsEnabled = theme === ThemeType.dark;
  const auth = useAuth();

  const handleLogout = useCallback(() => {
    SessionStorage.clear();
    auth.signOut();
    Toast.show({
      type: 'success',
      text1: 'Volte sempre!',
    });
  }, [auth]);

  return (
    <HeaderContainer>
      <LogoText>TaskMaster</LogoText>
      <HeaderButtonsContainer>
        <ThemeToggleSwitch value={darkModeIsEnabled} onValueChange={toggleTheme} />
        {auth.authData && (
          <IconButton onPress={handleLogout}>
            <Feather name="log-out" size={24} color={theme === ThemeType.dark ? '#fff' : '#000'} />
          </IconButton>
        )}
      </HeaderButtonsContainer>
    </HeaderContainer>
  );
};
