import { NavLink } from "react-router-dom";
import {
  LayoutDashboard, Warehouse, Package, Boxes, Tags, Truck,
  ArrowLeftRight, Users, BarChart3, Settings,
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Warehouses", path: "/admin/warehouses", icon: Warehouse },
  { label: "Inventory", path: "/admin/inventory", icon: Boxes },
  { label: "Products", path: "/admin/products", icon: Package },
  { label: "Categories", path: "/admin/categories", icon: Tags },
  { label: "Suppliers", path: "/admin/suppliers", icon: Truck },
  { label: "Stock Movements", path: "/admin/stock-movements", icon: ArrowLeftRight },
  { label: "Users", path: "/admin/users", icon: Users },
  { label: "Reports", path: "/admin/reports", icon: BarChart3 },
  { label: "Settings", path: "/admin/settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 flex w-64 flex-col border-r border-slate-200 bg-white max-lg:w-20">
      <div className="flex h-20 items-center gap-3 border-b border-slate-200 px-5 max-lg:justify-center max-lg:px-2">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
          <Warehouse size={23} />
        </div>
        <div className="max-lg:hidden">
          <h1 className="text-lg font-bold text-slate-900">WareHouse</h1>
          <p className="text-xs text-slate-500">Management System</p>
        </div>
      </div>

      <div className="px-3 pt-6">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 max-lg:hidden">
          Main Menu
        </p>
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                title={item.label}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition max-lg:justify-center max-lg:px-2 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`
                }
              >
                <Icon size={19} strokeWidth={1.8} />
                <span className="max-lg:hidden">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto border-t border-slate-200 p-3">
        <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 max-lg:justify-center max-lg:p-2">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">A</div>
          <div className="min-w-0 max-lg:hidden">
            <p className="truncate text-sm font-semibold text-slate-800">Warehouse Admin</p>
            <p className="truncate text-xs text-slate-500">Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  );
}