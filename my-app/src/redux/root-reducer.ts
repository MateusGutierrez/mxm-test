import { combineReducers } from 'redux';
import taskReducer from './task/slice';

export const rootReducer = combineReducers({
  task: taskReducer,
});
