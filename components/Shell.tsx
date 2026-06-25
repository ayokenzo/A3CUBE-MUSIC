import Link from "next/link"

const nav = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Artist dashboard" },
  { href: "/admin/reviews", label: "Admin" },
]

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/40 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-black tracking-tight">A3CUBE<span className="text-fuchsia-400">MUSIC</span></Link>
          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            {nav.map((item) => <Link key={item.href} href={item.href} className="hover:text-white">{item.label}</Link>)}
          </div>
          <Link href="/dashboard/upload" className="rounded-full bg-fuchsia-500 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-fuchsia-500/25">Upload release</Link>
        </nav>
      </header>
      {children}
    </div>
  )
}

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-3xl border border-white/10 bg-white/[.06] p-6 shadow-2xl shadow-black/20 ${className}`}>{children}</div>
}
