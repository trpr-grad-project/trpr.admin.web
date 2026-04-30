import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from './layout/DashboardLayout'
import RequestDetails from './Features/upgradeRequests/pages/RequestDetails';
import UpgradeRequests from './Features/upgradeRequests/pages/UpgradeRequests';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<UpgradeRequests />} />
          <Route path="requests/:requestId" element={<RequestDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App