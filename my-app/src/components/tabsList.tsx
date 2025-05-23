import styled from 'styled-components/native';
import { View } from 'react-native';

export const TabsList = styled(View)`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  gap: 4px;
  width: 60%;
`;
