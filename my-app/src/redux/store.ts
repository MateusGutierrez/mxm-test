import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: rootReducer,
});
