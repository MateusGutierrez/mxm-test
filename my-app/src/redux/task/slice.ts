import { createSlice, nanoid } from '@reduxjs/toolkit';
import { ITask } from './interface';
import Toast from 'react-native-toast-message';

const INITIAL_LIST = [
  {
    id: '1',
    task: 'Estudar React',
    status: 'a_fazer',
    description: 'preciso fazer mais projetos em react',
  },
  {
    id: '2',
    task: 'Desenvolver componente',
    status: 'fazendo',
    description: 'seria legal desenvolver uma lib de componentes',
  },
  {
    id: '3',
    task: 'Enviar PR',
    status: 'concluido',
    description: 'preciso enviar o pr o mais rápido possivel',
  },
];

const INITIAL_STATE = {
  list: INITIAL_LIST as ITask[],
};

const taskSlice = createSlice({
  name: 'task',
  initialState: INITIAL_STATE,
  reducers: {
    addTask: (state, action) => {
      const task = {
        ...action.payload,
        id: nanoid(),
      };
      state.list.push(task);
      Toast.show({
        type: 'success',
        text1: 'tarefa adicionada com sucesso!',
      });
    },
    updateTask: (state, action) => {
      const { id, task, description, status } = action.payload;
      state.list = state.list.map(item =>
        item.id === id ? { ...item, task, description, status } : item
      );
      Toast.show({ type: 'success', text1: 'Tarefa atualizada!' });
    },
    removeTask: (state, action) => {
      state.list = state.list.filter(item => item.id !== action.payload);
      Toast.show({
        type: 'success',
        text1: 'tarefa excluída!',
      });
    },
  },
});

export const { addTask, removeTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
