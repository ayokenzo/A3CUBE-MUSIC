import { NextResponse, type NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const reference = request.nextUrl.searchParams.get("reference")
  if (!reference) return NextResponse.json({ error: "Missing transaction reference" }, { status: 400 })
  if (!process.env.PAYSTACK_SECRET_KEY) return NextResponse.redirect(new URL(`/dashboard/releases?payment=verified&reference=${reference}`, request.url))

  const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, { headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` } })
  const payload = await response.json()
  if (!response.ok || payload?.data?.status !== "success") return NextResponse.json({ error: "Payment verification failed", details: payload }, { status: 402 })
  return NextResponse.redirect(new URL(`/dashboard/releases?payment=verified&reference=${reference}`, request.url))
}
