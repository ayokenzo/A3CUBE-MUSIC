import Link from "next/link"
import { Shell } from "@/components/Shell"

const artistLinks = [
  ["/dashboard", "Overview"], ["/dashboard/upload", "Upload release"], ["/dashboard/releases", "Manage releases"], ["/dashboard/earnings", "Earnings"],
]
const adminLinks = [["/admin/reviews", "Release queue"], ["/admin/artists", "Artists"]]

export function Workspace({ children, admin = false }: { children: React.ReactNode; admin?: boolean }) {
  const links = admin ? adminLinks : artistLinks
  return <Shell><main className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[240px_1fr]"><aside className="h-fit rounded-3xl border border-white/10 bg-white/[.06] p-4"><p className="mb-3 px-3 text-xs uppercase tracking-[.3em] text-slate-400">{admin ? 'Admin' : 'Artist'}</p><div className="grid gap-2">{links.map(([href, label]) => <Link className="rounded-2xl px-4 py-3 text-slate-200 hover:bg-white/10" key={href} href={href}>{label}</Link>)}</div></aside><section>{children}</section></main></Shell>
}
