import { Search, Plus, MoreHorizontal } from "lucide-react";

type PlaceholderPageProps = {
  title: string;
  description: string;
};

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        </div>
        <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
          <Plus size={17} /> Add New
        </button>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="font-semibold text-slate-900">All records</h2>
            <p className="mt-1 text-sm text-slate-500">Starter layout — connect this screen to your Figma requirements.</p>
          </div>
          <label className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
            <Search size={17} className="text-slate-400" />
            <input className="w-40 text-sm outline-none" placeholder="Search records..." aria-label={`Search ${title}`} />
          </label>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[540px] text-left text-sm">
            <thead>
              <tr className="border-y border-slate-200 bg-slate-50 text-slate-500">
                <th className="px-4 py-3 font-medium">Name / Item</th>
                <th className="px-4 py-3 font-medium">Reference ID</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Updated</th>
                <th className="px-4 py-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} className="px-4 py-14 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
                    <MoreHorizontal size={24} />
                  </div>
                  <p className="mt-3 font-medium text-slate-700">No records to display</p>
                  <p className="mt-1 text-sm text-slate-500">This is a placeholder. Add the fields and rows required by your project.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-xs text-slate-400">Placeholder page — not yet matched to the Figma design.</p>
    </section>
  );
}