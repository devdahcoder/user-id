import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './api/userApi';
import modalReducer from './slices/modalSlice';
import searchReducer from './slices/searchSlice';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    search: searchReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
