import styled from 'styled-components/native';
import { View } from 'react-native';

export const TabsList = styled(View)`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 12px;
`;
