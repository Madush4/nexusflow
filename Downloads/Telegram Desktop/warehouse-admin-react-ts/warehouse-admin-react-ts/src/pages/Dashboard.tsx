import {
  Boxes, Warehouse, PackageCheck, AlertTriangle, ArrowUpRight,
} from "lucide-react";

const statistics = [
  { title: "Total Warehouses", value: "12", description: "Registered warehouses", icon: Warehouse, iconStyle: "bg-blue-100 text-blue-700" },
  { title: "Total Products", value: "2,450", description: "Products registered", icon: Boxes, iconStyle: "bg-violet-100 text-violet-700" },
  { title: "Stock In", value: "186", description: "Illustrative monthly total", icon: PackageCheck, iconStyle: "bg-emerald-100 text-emerald-700" },
  { title: "Low Stock Items", value: "24", description: "Items needing attention", icon: AlertTriangle, iconStyle: "bg-amber-100 text-amber-700" },
];

const recentActivities = [
  { id: 1, activity: "New product registered", reference: "PRD-1001", status: "Completed", time: "09:30 AM" },
  { id: 2, activity: "Stock quantity updated", reference: "PRD-1002", status: "Completed", time: "10:15 AM" },
  { id: 3, activity: "Low stock detected", reference: "PRD-1003", status: "Attention", time: "11:00 AM" },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
          <p className="mt-1 text-sm text-slate-500">Overview of your warehouse operations.</p>
        </div>
        <button type="button" onClick={() => window.location.assign("/admin/products")} className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700">
          + Add New Product
        </button>
      </div>

      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {statistics.map((stat) => {
          const Icon = stat.icon;
          return (
            <article key={stat.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                  <h2 className="mt-3 text-3xl font-bold text-slate-900">{stat.value}</h2>
                </div>
                <div className={`rounded-xl p-3 ${stat.iconStyle}`}><Icon size={23} /></div>
              </div>
              <p className="mt-4 text-xs text-slate-500">{stat.description}</p>
            </article>
          );
        })}
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-6 xl:col-span-2">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Recent Activities</h2>
              <p className="mt-1 text-sm text-slate-500">Latest warehouse operations</p>
            </div>
            <button type="button" onClick={() => window.location.assign("/admin/stock-movements")} className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800">
              View all <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[500px] text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="pb-3 font-medium">Activity</th>
                  <th className="pb-3 font-medium">Reference</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Time</th>
                </tr>
              </thead>
              <tbody>
                {recentActivities.map((activity) => (
                  <tr key={activity.id} className="border-b border-slate-100 last:border-0">
                    <td className="py-4 font-medium text-slate-800">{activity.activity}</td>
                    <td className="py-4 text-slate-500">{activity.reference}</td>
                    <td className="py-4">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${activity.status === "Completed" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>{activity.status}</span>
                    </td>
                    <td className="py-4 text-slate-500">{activity.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">Stock Overview</h2>
          <p className="mt-1 text-sm text-slate-500">Illustrative inventory breakdown</p>
          <div className="mt-6 space-y-5">
            {[
              { label: "In Stock", value: 72, bar: "bg-emerald-500" },
              { label: "Low Stock", value: 18, bar: "bg-amber-500" },
              { label: "Out of Stock", value: 10, bar: "bg-red-500" },
            ].map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-slate-600">{item.label}</span>
                  <span className="font-semibold text-slate-800">{item.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div className={`h-2 rounded-full ${item.bar}`} style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-lg bg-blue-50 p-4">
            <p className="text-sm font-semibold text-blue-900">Inventory status</p>
            <p className="mt-1 text-xs leading-5 text-blue-700">Review low-stock items regularly to help maintain sufficient inventory levels.</p>
          </div>
        </div>
      </section>
      <p className="text-xs text-slate-400">Demo content only — replace these figures with project data.</p>
    </div>
  );
}