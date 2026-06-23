import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from './layout/DashboardLayout'
import RequestDetails from './Features/upgradeRequests/pages/RequestDetails';
import UpgradeRequests from './Features/upgradeRequests/pages/UpgradeRequests';
import Login from './Features/Auth/Pages/Login';
import ProtectedRoute from './routes/ProtectedRoute';
import UsersManagement from './Features/usersManagement/pages/UsersManagement';
import UserDetails from './Features/usersManagement/pages/UserDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Navigate to="/requests" replace />} />
            <Route path="users" element={<UsersManagement/>} />
            <Route path="requests" element={<UpgradeRequests />} />
            <Route path="requests/:requestId" element={<RequestDetails />} />
            <Route path="users/:userId" element={<UserDetails />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App