import { Bell, Search } from "lucide-react";
import { useLocation } from "react-router-dom";

const titles: Record<string, string> = {
  "/admin/dashboard": "Dashboard",
  "/admin/warehouses": "Warehouse Management",
  "/admin/inventory": "Inventory Management",
  "/admin/products": "Product Management",
  "/admin/categories": "Category Management",
  "/admin/suppliers": "Supplier Management",
  "/admin/stock-movements": "Stock Movements",
  "/admin/users": "User Management",
  "/admin/reports": "Reports",
  "/admin/settings": "Settings",
};

export default function Header() {
  const { pathname } = useLocation();
  const title = titles[pathname] ?? "Warehouse Admin";

  return (
    <header className="sticky top-0 z-10 flex min-h-20 items-center justify-between gap-4 border-b border-slate-200 bg-white px-8 max-sm:px-4">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        <p className="mt-0.5 text-sm text-slate-500 max-sm:hidden">Manage your warehouse operations</p>
      </div>
      <div className="flex items-center gap-3">
        <label className="hidden items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 md:flex">
          <Search size={18} className="text-slate-400" />
          <input type="search" placeholder="Search..." className="w-36 bg-transparent text-sm outline-none placeholder:text-slate-400" aria-label="Search" />
        </label>
        <button type="button" aria-label="Notifications" className="relative rounded-lg border border-slate-200 p-2.5 text-slate-600 hover:bg-slate-50">
          <Bell size={20} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">A</div>
      </div>
    </header>
  );
}