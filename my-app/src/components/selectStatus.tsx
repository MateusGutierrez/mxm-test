import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import styled, { useTheme } from 'styled-components/native';

const Container = styled.View`
  margin-bottom: 8px;
  z-index: 100;
`;

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export const SelectDropdown = ({ value, onChange }: Props) => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'A Fazer', value: 'a_fazer' },
    { label: 'Fazendo', value: 'fazendo' },
    { label: 'Concluído', value: 'concluido' },
  ]);

  return (
    <Container>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={callback => onChange(callback(value))}
        setItems={setItems}
        placeholder="Selecione o status"
        style={{
          backgroundColor: theme.colors.input,
          borderColor: theme.colors.border,
        }}
        textStyle={{
          color: theme.colors.foreground,
        }}
        dropDownContainerStyle={{
          backgroundColor: theme.colors.input,
          borderColor: theme.colors.border,
        }}
      />
    </Container>
  );
};
