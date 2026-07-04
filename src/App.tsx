import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import DashboardLayout from './layout/DashboardLayout'
import RequestDetails from './Features/upgradeRequests/pages/RequestDetails';
import UpgradeRequests from './Features/upgradeRequests/pages/UpgradeRequests';
import Login from './Features/Auth/Pages/Login';
import ProtectedRoute from './routes/ProtectedRoute';
import UsersManagement from './Features/usersManagement/pages/UsersManagement';
import UserDetails from './Features/usersManagement/pages/UserDetails';
import PlacesManagement from './Features/placesManagement/pages/PlacesManagement';
import SupportManagement from './Features/supportManagement/pages/SupportManagement';
import SupportRequest from './Features/supportManagement/pages/SupportRequest';
import TripsManagement from './Features/trips/pages/TripsManagement';
import TripDetails from './Features/trips/pages/TripDetails';
import CompaniesManagement from './Features/companiesManagement/pages/CompaniesManagement';
// import CompanyDetails from './Features/companiesManagement/pages/CompanyDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Navigate to="/requests" replace />} />
            <Route path="requests" element={<UpgradeRequests />} />
            <Route path="trips" element={<TripsManagement />} />
            <Route path="places" element={<PlacesManagement />} />
            <Route path="companies" element={<CompaniesManagement />} />
            <Route path="users" element={<UsersManagement/>} />
            <Route path="support" element={<SupportManagement />} />
            <Route path="requests/:requestId" element={<RequestDetails />} />
            <Route path="trips/:tripId" element={<TripDetails/>} />
            {/* <Route path="companies/:companyId" element={<CompanyDetails/>} /> */}
            <Route path="users/:userId" element={<UserDetails />} />
            <Route path="support/:supportId" element={<SupportRequest/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App