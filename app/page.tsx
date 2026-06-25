import Link from "next/link"
import { Card, Shell } from "@/components/Shell"
import { pricingPlans } from "@/lib/data"

const stats = ["150+ stores", "48h review SLA", "90% royalty payout"]

export default function Home() {
  return (
    <Shell>
      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-4 py-2 text-sm text-fuchsia-200">Music distribution, payments, and review ops in one workspace</p>
            <h1 className="text-5xl font-black leading-tight md:text-7xl">Release music globally without losing the business details.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">A3CUBE Music helps independent artists upload releases, pay distribution fees with Paystack, monitor store delivery, and track royalty performance from a focused dashboard.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/dashboard/upload" className="rounded-full bg-white px-6 py-3 font-bold text-slate-950">Start a release</Link>
              <a href="#pricing" className="rounded-full border border-white/20 px-6 py-3 font-bold text-white">View pricing</a>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">{stats.map((stat) => <div key={stat} className="rounded-2xl bg-white/10 p-4 font-bold">{stat}</div>)}</div>
          </div>
          <Card className="bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/10">
            <div className="rounded-2xl bg-black/40 p-5">
              <p className="text-sm text-slate-400">Campaign snapshot</p>
              <h2 className="mt-2 text-3xl font-black">Neon Roads</h2>
              <div className="mt-6 space-y-4">
                {['Metadata approved', 'Paystack payment confirmed', 'Delivered to DSPs', 'Royalty report active'].map((item, index) => <div key={item} className="flex items-center gap-3"><span className="grid size-8 place-items-center rounded-full bg-fuchsia-500 text-sm font-bold">{index + 1}</span><span>{item}</span></div>)}
              </div>
            </div>
          </Card>
        </section>
        <section id="pricing" className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 max-w-2xl"><h2 className="text-4xl font-black">Simple release pricing</h2><p className="mt-3 text-slate-300">Choose a package, complete payment via Paystack, then send your release into review.</p></div>
          <div className="grid gap-6 md:grid-cols-3">{pricingPlans.map((plan) => <Card key={plan.name} className={plan.highlighted ? "border-fuchsia-400 bg-fuchsia-500/15" : ""}><h3 className="text-2xl font-black">{plan.name}</h3><p className="mt-3 text-slate-300">{plan.description}</p><p className="mt-6 text-4xl font-black">{plan.price}</p><ul className="mt-6 space-y-3 text-slate-200">{plan.features.map((f) => <li key={f}>✓ {f}</li>)}</ul><Link href="/dashboard/upload" className="mt-8 block rounded-full bg-white px-5 py-3 text-center font-bold text-slate-950">Choose plan</Link></Card>)}</div>
        </section>
      </main>
    </Shell>
  )
}
