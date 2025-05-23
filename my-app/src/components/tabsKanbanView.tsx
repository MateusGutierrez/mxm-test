import React, { useCallback, useState } from 'react';
import { FlatList, Text } from 'react-native';
import styled from 'styled-components/native';
import { Tabs } from './tabs';
import { TabsList } from './tabsList';
import { TabsTrigger } from './tabsTrigger';
import { TabsContent } from './tabsContent';
import { useAppSelector } from '../redux/hooks/useSelector';
import { GoBackButtonContainer } from './styles';
import { useNavigation } from '@react-navigation/native';
import { ButtonSecondary } from './button';
import { TaskModal } from './taskModal';
import useIsVisible from '../utils/useIsVisible';
import { ITask } from '../redux/task/interface';

const statusLabels: Record<string, string> = {
  a_fazer: 'A FAZER',
  fazendo: 'FAZENDO',
  concluido: 'CONCLUÍDO',
};

export const TabsKanbanView = () => {
  const taskList = useAppSelector(state => state.task.list);
  const { navigate } = useNavigation();
  const { show, isVisible, hide } = useIsVisible();
  const [selectedTask, setSelectedTask] = useState<ITask | null>(null);

  const openModal = useCallback(
    (task: ITask) => {
      setSelectedTask(task);
      show();
    },
    [show]
  );

  const closeModal = useCallback(() => {
    setSelectedTask(null);
    hide();
  }, [hide]);

  return (
    <>
      <Tabs defaultValue="lista">
        <GoBackButtonContainer>
          <ButtonSecondary onPress={() => navigate('Home')} title={'Voltar'} />
          <TabsList>
            <TabsTrigger value="lista">Lista</TabsTrigger>
            <TabsTrigger value="kanban">Kanban</TabsTrigger>
          </TabsList>
        </GoBackButtonContainer>

        <TabsContent value="lista">
          <FlatList
            data={taskList}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TaskCardList status={item.status} onPress={() => openModal(item)}>
                {item.task}
              </TaskCardList>
            )}
          />
        </TabsContent>
        <TabsContent value="kanban">
          <KanbanContainer>
            {['a_fazer', 'fazendo', 'concluido'].map(status => (
              <KanbanColumn key={status} status={status}>
                <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>
                  {statusLabels[status] ?? status.toUpperCase()}
                </Text>
                <KanbanListContainer>
                  {taskList
                    .filter(t => t.status === status)
                    .map(task => (
                      <TaskCard onPress={() => openModal(task)} key={task.id}>
                        {task.task}
                      </TaskCard>
                    ))}
                </KanbanListContainer>
              </KanbanColumn>
            ))}
          </KanbanContainer>
        </TabsContent>
      </Tabs>
      <TaskModal isVisible={isVisible} hide={closeModal} task={selectedTask} />
    </>
  );
};

const TaskCard = styled.Text`
  background-color: ${({ theme }) => theme.colors.card};
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.foreground};
`;

const TaskCardList = styled.Text<{ status: string }>`
  background-color: ${({ theme }) => theme.colors.card};
  padding: 12px;
  border: 1px solid
    ${({ theme, status }) =>
      status === 'a_fazer'
        ? theme.colors.destructive
        : status === 'fazendo'
          ? theme.colors.warn
          : theme.colors.success};
  border-radius: 8px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.foreground};
`;

const KanbanContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  max-height: 500px;
  overflow: hidden;
`;

const KanbanListContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex-grow: 1;
  gap: 4px;
`;

const KanbanColumn = styled.View<{ status: string }>`
  flex: 1;
  padding: 8px;
  border-radius: 8px;
  height: 100%;
  background-color: ${({ theme, status }) =>
    status === 'a_fazer'
      ? theme.colors.destructive
      : status === 'fazendo'
        ? theme.colors.warn
        : theme.colors.success};
`;
