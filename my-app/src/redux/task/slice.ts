import { createSlice } from '@reduxjs/toolkit';
import { ITask } from './interface';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  list: [] as ITask[],
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
    },
    changeTaskStatus: (state, action) => {
      state.list = state.list.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, status: action.payload.status };
        }
        return item;
      });
    },
    removeTask: (state, action) => {
      state.list = state.list.filter(item => item.id !== action.payload);
    },
  },
});

export const { addTask, removeTask, changeTaskStatus } = taskSlice.actions;
export default taskSlice.reducer;
