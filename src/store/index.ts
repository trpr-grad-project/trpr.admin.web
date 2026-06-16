import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import { upgradeRequestsApi } from './api/upgradeRequestsApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [upgradeRequestsApi.reducerPath]: upgradeRequestsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(upgradeRequestsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;