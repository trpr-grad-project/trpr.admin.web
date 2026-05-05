import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, setCredentials } from '../store/slices/authSlice';
import axiosInstance from '../api/axiosInstance';

export function useAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleLogin(identifier: string, password: string) {
    const response = await axiosInstance.post("/auth/login", { identifier, password });
    dispatch(setCredentials({
      accessToken: response.data.accessToken,
      refreshToken: response.data.refreshToken,
      profileSetupCompleted: response.data.profileSetupCompleted,
    }));
    navigate("/requests");
  }

  function handleLogout() {
    dispatch(logout());
    navigate('/login');
  }

  return { handleLogin, handleLogout };
}