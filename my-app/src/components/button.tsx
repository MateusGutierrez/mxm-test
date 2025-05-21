import React from 'react';
import { Text, TouchableOpacityProps, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const StyledButton = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 12px;
  border-radius: ${({ theme }) => theme.radii.md}px;
  align-items: center;
  justify-content: center;
`;
export const ButtonText = styled(Text)`
  color: ${({ theme }) => theme.colors.primaryForeground};
  font-weight: bold;
`;
interface MyButtonProps extends TouchableOpacityProps {
  title: string;
}
export function Button({ title, style, ...rest }: MyButtonProps) {
  return (
    <StyledButton {...rest} style={[style]}>
      <ButtonText>{title}</ButtonText>
    </StyledButton>
  );
}
