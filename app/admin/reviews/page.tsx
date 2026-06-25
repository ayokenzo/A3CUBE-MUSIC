import { Workspace } from "@/components/DashboardNav"
import { Card } from "@/components/Shell"
import { reviewQueue } from "@/lib/data"

export default function ReviewQueue(){return <Workspace admin><h1 className="text-4xl font-black">Release review queue</h1><p className="mt-2 text-slate-300">Approve releases for delivery or reject with required edits.</p><div className="mt-8 space-y-4">{reviewQueue.map(item=><Card key={item.id}><div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"><div><p className="text-sm text-slate-400">{item.id} · Submitted {item.submitted} · Risk {item.risk}</p><h2 className="mt-1 text-2xl font-black">{item.title}</h2><p className="text-slate-300">{item.artist}</p></div><div className="flex gap-3"><button className="rounded-full bg-emerald-500 px-5 py-2 font-bold text-emerald-950">Approve</button><button className="rounded-full bg-rose-500 px-5 py-2 font-bold text-white">Reject</button></div></div></Card>)}</div></Workspace>}
