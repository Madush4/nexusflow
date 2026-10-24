import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />
      <div className="min-h-screen pl-64 max-lg:pl-20">
        <Header />
        <main className="p-8 max-md:p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}