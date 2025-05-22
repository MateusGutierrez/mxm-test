import React from 'react';
import styled from 'styled-components/native';

const FooterContainer = styled.View`
  width: 100%;
  padding-top: 24px;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.muted};
  border-right-color: transparent;
  border-left-color: transparent;
  border-bottom-color: transparent;
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
