import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
  role: string;
}

interface TokenPayload {
  given_name: string;
  family_name: string;
  identifier: string;
  sub: string;
  realm_access: { roles: string[] };
}

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  profileSetupCompleted: boolean;
  isAuthenticated: boolean;
  user: User | null;
}

const getInitialUser = (): User | null => {
  const token = localStorage.getItem('accessToken');
  if (!token) return null;
  try {
    const decoded = jwtDecode<TokenPayload>(token);
    return {
      firstName: decoded.given_name,
      lastName: decoded.family_name,
      email: decoded.identifier,
      id: decoded.sub,
      role: decoded.realm_access.roles[0],
    };
  } catch {
    return null;
  }
};

const initialState: AuthState = {
  accessToken: localStorage.getItem('accessToken'),
  refreshToken: localStorage.getItem('refreshToken'),
  profileSetupCompleted: false,
  isAuthenticated: !!localStorage.getItem('accessToken'),
  user: getInitialUser(),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{
      accessToken: string;
      refreshToken: string;
      profileSetupCompleted: boolean;
      user: User | null;
    }>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.profileSetupCompleted = action.payload.profileSetupCompleted;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      localStorage.setItem('accessToken', action.payload.accessToken);
      localStorage.setItem('refreshToken', action.payload.refreshToken);
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.profileSetupCompleted = false;
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;