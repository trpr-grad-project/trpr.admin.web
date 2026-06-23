import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, setCredentials } from '../store/slices/authSlice';
import axiosInstance from '../api/axiosInstance';
import { jwtDecode } from 'jwt-decode';

interface TokenPayload {
  given_name: string;
  family_name: string;
  identifier: string;
  sub: string;
  realm_access: { roles: string[] };
}

export function useAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleLogin(identifier: string, password: string) {
    const response = await axiosInstance.post("/auth/login", { identifier, password });
    
    const decoded = jwtDecode<TokenPayload>(response.data.accessToken);

    const isAdmin = decoded.realm_access.roles.includes('Admin');
    if (!isAdmin) {
      throw new Error('UNAUTHORIZED');
    }

    dispatch(setCredentials({
      accessToken: response.data.accessToken,
      refreshToken: response.data.refreshToken,
      profileSetupCompleted: response.data.profileSetupCompleted,
      user: {
        firstName: decoded.given_name,
        lastName: decoded.family_name,
        email: decoded.identifier,
        id: decoded.sub,
        role: decoded.realm_access.roles[0],
      }
    }));
    navigate("/requests");
  }

  function handleLogout() {
    dispatch(logout());
    navigate('/login');
  }

  return { handleLogin, handleLogout };
}