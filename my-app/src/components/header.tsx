import React, { useContext, useState } from 'react';
import styled from 'styled-components/native';
import { ThemeContext, ThemeType } from '../theme/theme';
import { ThemeToggleSwitch } from './themeButton';
import { useAuth } from '../context/auth';
import { TouchableOpacity } from 'react-native';
import SessionStorage from 'react-native-session-storage';
import Toast from 'react-native-toast-message';
import { ButtonSecondary } from './button';
import { Feather } from '@expo/vector-icons';

const HeaderContainer = styled.View`
  width: 100%;
  padding: 16px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.muted};
  border-right-color: transparent;
  border-left-color: transparent;
  border-top-color: transparent;
`;

const LogoText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const UserMenuContainer = styled.View`
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
`;

const DropdownMenu = styled.View`
  position: absolute;
  top: 45px;
  right: 0;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.muted};
  border-radius: ${({ theme }) => theme.radii.md}px;
  padding: 12px;
  z-index: 999;
  width: 100px;
`;

const IconButton = styled(TouchableOpacity)`
  padding: 8px;
`;

export const HeaderButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const { toggleTheme, theme } = useContext(ThemeContext);
  const darkModeIsEnabled = theme === ThemeType.dark;
  const auth = useAuth();

  const handleLogout = () => {
    setDropdownVisible(false);
    SessionStorage.clear();
    auth.signOut();
    Toast.show({
      type: 'success',
      text1: 'Volte sempre!',
    });
  };

  return (
    <HeaderContainer>
      <LogoText>TaskMaster</LogoText>
      <HeaderButtonsContainer>
        <ThemeToggleSwitch value={darkModeIsEnabled} onValueChange={toggleTheme} />
        {auth.authData && (
          <UserMenuContainer>
            <IconButton onPress={() => setDropdownVisible(prev => !prev)}>
              <Feather name="menu" size={24} color={theme === ThemeType.dark ? '#fff' : '#000'} />
            </IconButton>

            {dropdownVisible && (
              <DropdownMenu>
                <ButtonSecondary title="Sair" onPress={handleLogout} />
              </DropdownMenu>
            )}
          </UserMenuContainer>
        )}
      </HeaderButtonsContainer>
    </HeaderContainer>
  );
};
