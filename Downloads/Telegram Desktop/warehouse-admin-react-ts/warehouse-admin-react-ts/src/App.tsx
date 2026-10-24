import { Navigate, Route, Routes } from "react-router-dom";
import AdminLayout from "./components/layout/AdminLayout";
import Dashboard from "./pages/Dashboard";
import PlaceholderPage from "./pages/PlaceholderPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="warehouses" element={<PlaceholderPage title="Warehouse Management" description="View and manage warehouse information." />} />
        <Route path="inventory" element={<PlaceholderPage title="Inventory Management" description="Monitor inventory levels and stock quantities." />} />
        <Route path="products" element={<PlaceholderPage title="Product Management" description="Manage registered products." />} />
        <Route path="categories" element={<PlaceholderPage title="Category Management" description="Organize warehouse products into categories." />} />
        <Route path="suppliers" element={<PlaceholderPage title="Supplier Management" description="View and manage supplier information." />} />
        <Route path="stock-movements" element={<PlaceholderPage title="Stock Movements" description="Review stock-in and stock-out transactions." />} />
        <Route path="users" element={<PlaceholderPage title="User Management" description="Manage user accounts and permissions." />} />
        <Route path="reports" element={<PlaceholderPage title="Reports" description="Review warehouse and inventory reports." />} />
        <Route path="settings" element={<PlaceholderPage title="Settings" description="Configure warehouse administration preferences." />} />
      </Route>
      <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
    </Routes>
  );
}