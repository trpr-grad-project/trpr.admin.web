import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import { upgradeRequestsApi } from './api/upgradeRequestsApi';
import { usersApi } from './api/usersApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [upgradeRequestsApi.reducerPath]: upgradeRequestsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(upgradeRequestsApi.middleware)
      .concat(usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;