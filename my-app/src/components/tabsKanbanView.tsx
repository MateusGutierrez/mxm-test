import React from 'react';
import { FlatList, Text } from 'react-native';
import styled from 'styled-components/native';
import { Tabs } from './tabs';
import { TabsList } from './tabsList';
import { TabsTrigger } from './tabsTrigger';
import { TabsContent } from './tabsContent';

const fakeTasks = [
  { id: '1', task: 'Estudar React', status: 'a_fazer' },
  { id: '2', task: 'Desenvolver componente', status: 'fazendo' },
  { id: '3', task: 'Enviar PR', status: 'concluido' },
];

export const TabsKanbanView = () => {
  return (
    <Tabs defaultValue="lista">
      <TabsList>
        <TabsTrigger value="lista">Lista</TabsTrigger>
        <TabsTrigger value="kanban">Kanban</TabsTrigger>
      </TabsList>

      <TabsContent value="lista">
        <FlatList
          data={fakeTasks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TaskCard>{item.task}</TaskCard>}
        />
      </TabsContent>

      <TabsContent value="kanban">
        <KanbanContainer>
          {['a_fazer', 'fazendo', 'concluido'].map(status => (
            <KanbanColumn key={status}>
              <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>{status.toUpperCase()}</Text>
              {fakeTasks
                .filter(t => t.status === status)
                .map(task => (
                  <TaskCard key={task.id}>{task.task}</TaskCard>
                ))}
            </KanbanColumn>
          ))}
        </KanbanContainer>
      </TabsContent>
    </Tabs>
  );
};

const TaskCard = styled.Text`
  background-color: ${({ theme }) => theme.colors.card};
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.foreground};
`;

const KanbanContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
`;

const KanbanColumn = styled.View`
  flex: 1;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.muted};
  border-radius: 8px;
`;
