import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from './slices/authSlice';
import { upgradeRequestsApi } from './api/upgradeRequestsApi';
import { usersApi } from './api/usersApi';
import { supportApi } from './api/supportApi';
import { placesApi } from './api/placesApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [upgradeRequestsApi.reducerPath]: upgradeRequestsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [supportApi.reducerPath]: supportApi.reducer,
    [placesApi.reducerPath]: placesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(upgradeRequestsApi.middleware)
      .concat(usersApi.middleware)
      .concat(supportApi.middleware)
      .concat(placesApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;