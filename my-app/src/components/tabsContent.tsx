import React from 'react';
import { View } from 'react-native';
import { useTabsContext } from './tabs';

interface Props {
  value: string;
  children: React.ReactNode;
}

export const TabsContent = ({ value, children }: Props) => {
  const { value: current } = useTabsContext();

  if (value !== current) return null;

  return <View>{children}</View>;
};
