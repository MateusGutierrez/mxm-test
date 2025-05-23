import React, { useState } from 'react';
import {
  Modal,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styled from 'styled-components/native';
import { Button, ButtonSecondary } from './button';

const DialogTriggerButton = styled(TouchableOpacity)`
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.radii.md}px;
`;
const TriggerText = styled.Text`
  color: ${({ theme }) => theme.colors.secondaryForeground};
  font-weight: 500;
`;
const DialogContent = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 24px;
  border-radius: ${({ theme }) => theme.radii.md}px;
  width: 90%;
  max-width: 400px;
  gap: 16px;
`;
const DialogTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.accentForeground};
`;
const DialogDescription = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;
const FieldLabel = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.accentForeground};
  margin-bottom: 4px;
`;
const InputField = styled(TextInput)`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.muted};
  border-radius: ${({ theme }) => theme.radii.sm}px;
  padding: 8px;
  color: ${({ theme }) => theme.colors.accentForeground};
`;
const FooterContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  gap: 12px;
`;
const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;
export function DialogDemo() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('Pedro Duarte');
  const [username, setUsername] = useState('@peduarte');

  return (
    <>
      <DialogTriggerButton onPress={() => setVisible(true)}>
        <TriggerText>Edit Profile</TriggerText>
      </DialogTriggerButton>
      <Modal
        animationType="fade"
        transparent
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <Overlay>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={{ width: '100%', alignItems: 'center' }}
          >
            <Pressable style={{ flex: 1 }} onPress={() => setVisible(false)} />
            <DialogContent>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you are done.
              </DialogDescription>

              <View>
                <FieldLabel>Name</FieldLabel>
                <InputField value={name} onChangeText={setName} />
              </View>

              <View>
                <FieldLabel>Username</FieldLabel>
                <InputField value={username} onChangeText={setUsername} />
              </View>

              <FooterContainer>
                <ButtonSecondary title="Cancel" onPress={() => setVisible(false)} />
                <Button
                  title="Save changes"
                  onPress={() => {
                    setVisible(false);
                  }}
                />
              </FooterContainer>
            </DialogContent>
            <Pressable style={{ flex: 1 }} onPress={() => setVisible(false)} />
          </KeyboardAvoidingView>
        </Overlay>
      </Modal>
    </>
  );
}
