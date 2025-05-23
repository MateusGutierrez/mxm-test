import React from 'react';
import styled from 'styled-components/native';

const FooterContainer = styled.View`
  width: 100%;
  padding-top: 24px;
  align-items: center;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.popover};
  position: absolute;
  margin: 0 auto;
  bottom: 0;
  padding-bottom: 32px;
`;

const FooterText = styled.Text`
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-size: 12px;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2025 TaskMaster. All rights reserved.</FooterText>
    </FooterContainer>
  );
};
