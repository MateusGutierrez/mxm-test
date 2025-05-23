import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';
import { useTabsContext } from './tabs';

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
}

export const TabsTrigger = ({ value, children }: TabsTriggerProps) => {
  const { value: selected, setValue } = useTabsContext();
  const isActive = value === selected;

  return (
    <TriggerButton active={isActive} onPress={() => setValue(value)}>
      <TriggerText active={isActive}>{children}</TriggerText>
    </TriggerButton>
  );
};

const TriggerButton = styled(TouchableOpacity)<{ active: boolean }>`
  flex: 1;
  padding: 12px;
  background-color: ${({ theme, active }) => (active ? theme.colors.muted : theme.colors.card)};
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.muted};
  border-radius: ${({ theme }) => theme.radii.md}px;
`;

const TriggerText = styled(Text)<{ active: boolean }>`
  color: ${({ theme, active }) =>
    active ? theme.colors.cardForeground : theme.colors.mutedForeground};
  font-weight: 600;
`;
