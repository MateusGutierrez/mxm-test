import React, { useCallback, useEffect, useState } from 'react';
import {
  Modal,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import styled from 'styled-components/native';
import { Button, ButtonSecondary } from './button';
import { ITask } from '../redux/task/interface';
import { removeTask, updateTask } from '../redux/task/slice';
import { useAppDispatch } from '../redux/hooks/useAppDispatch';
import { SelectDropdown } from './selectStatus';
import { TextArea } from './textarea';

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
interface Props {
  isVisible: boolean;
  hide: () => void;
  task: ITask | null;
}

export function TaskModal({ isVisible, hide, task }: Props) {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<ITask['status']>('a_fazer');

  useEffect(() => {
    if (task) {
      setTitle(task.task);
      setDescription(task.description);
      setStatus(task.status);
    }
  }, [task]);

  const handleSave = useCallback(() => {
    dispatch(updateTask({ id: task?.id, status: status, description: description, task: title }));
    hide();
  }, [description, dispatch, hide, status, task?.id, title]);

  const handleRemove = useCallback(() => {
    dispatch(removeTask(task?.id));
    hide();
  }, [dispatch, hide, task?.id]);

  return (
    <Modal animationType="fade" transparent visible={isVisible} onRequestClose={hide}>
      <TouchableWithoutFeedback onPress={hide} accessible={false}>
        <Overlay>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={{ width: '100%', alignItems: 'center' }}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <DialogContent>
                <DialogTitle>Editar Tarefa</DialogTitle>

                <View>
                  <FieldLabel>Título</FieldLabel>
                  <InputField value={title} onChangeText={setTitle} />
                </View>

                <View>
                  <FieldLabel>Status</FieldLabel>
                  <SelectDropdown value={status} onChange={setStatus} />
                </View>

                <View>
                  <FieldLabel>Descrição</FieldLabel>
                  <TextArea value={description} onChangeText={setDescription} />
                </View>

                <FooterContainer>
                  <ButtonSecondary title="Excluir" onPress={handleRemove} />
                  <ButtonSecondary title="Cancelar" onPress={hide} />
                  <Button title="Salvar" onPress={handleSave} />
                </FooterContainer>
              </DialogContent>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </Overlay>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
