import React, { useState } from 'react';
import styled from 'styled-components/native';

interface TabsProps {
  children: React.ReactNode;
  defaultValue: string;
}

interface TabsContextType {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const TabsContext = React.createContext<TabsContextType | null>(null);

export const TabsContainer = styled.View`
  padding: 0 16px;
`;

export const Tabs = ({ children, defaultValue }: TabsProps) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <TabsContainer>{children}</TabsContainer>
    </TabsContext.Provider>
  );
};

export const useTabsContext = () => {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error('Tabs.* components must be used inside <Tabs>');
  return context;
};
