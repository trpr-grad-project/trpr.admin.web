import { Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import type { RootState } from '../store';

export default function ProtectedRoute() {
  // const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  // return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
  
  return <Outlet />;
}