import styled, { useTheme } from 'styled-components/native';
import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

const StyledInput = styled(TextInput)`
  width: 100%;
  padding: 12px 16px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.foreground};
  border-radius: ${({ theme }) => theme.radii.md}px;
  margin-bottom: 8px;
`;

export const Input = (props: TextInputProps) => {
  const theme = useTheme();
  return <StyledInput placeholderTextColor={theme.colors.mutedForeground} {...props} />;
};
