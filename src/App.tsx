import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from './layout/DashboardLayout'
import RequestDetails from './Features/upgradeRequests/pages/RequestDetails';
import UpgradeRequests from './Features/upgradeRequests/pages/UpgradeRequests';
import Login from './Features/Auth/Pages/Login';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Navigate to="/requests" replace />} />
            <Route path="dashboard" element={<div>Dashboard Coming Soon</div>} />
            <Route path="requests" element={<UpgradeRequests />} />
            <Route path="requests/:requestId" element={<RequestDetails />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App