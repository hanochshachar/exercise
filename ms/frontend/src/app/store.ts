import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import  CategorySlice  from '../features/images/categorySlice';
import  ImagesSlice  from '../features/images/imageSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    category: CategorySlice,
    images: ImagesSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
