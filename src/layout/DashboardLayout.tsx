import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <div className="flex flex-col flex-1 md:ml-72">

        <Topbar />

        <main className="p-6 bg-surface flex-1">
          <Outlet />
        </main>

        <Footer/>

      </div>

    </div>
  );
}