import React from 'react';
import { View } from 'react-native';
import { useTabsContext } from './tabs';
import styled from 'styled-components/native';

interface Props {
  value: string;
  children: React.ReactNode;
}

export const TabsContentContainer = styled(View)`
  overflow-y: hidden;
  max-height: 400px;
  padding-bottom: 50px;
`;

export const TabsContent = ({ value, children }: Props) => {
  const { value: current } = useTabsContext();

  if (value !== current) return null;

  return <TabsContentContainer>{children}</TabsContentContainer>;
};
