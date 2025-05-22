import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { ThemeContext, ThemeType } from '../theme/theme';
import { ThemeToggleSwitch } from './themeButton';

const HeaderContainer = styled.View`
  width: 100%;
  padding: 16px;
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

export const Header = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const darkModeIsEnabled = theme === ThemeType.dark;

  return (
    <HeaderContainer>
      <LogoText>TaskMaster</LogoText>
      <ThemeToggleSwitch value={darkModeIsEnabled} onValueChange={toggleTheme} />
    </HeaderContainer>
  );
};
