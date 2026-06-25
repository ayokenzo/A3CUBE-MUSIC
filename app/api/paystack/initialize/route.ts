import { NextResponse, type NextRequest } from "next/server"

const amounts: Record<string, number> = { starter: 750000, pro: 1800000 }

export async function POST(request: NextRequest) {
  const form = await request.formData()
  const email = String(form.get("email") ?? "")
  const plan = String(form.get("plan") ?? "starter")
  const amount = amounts[plan] ?? amounts.starter
  const reference = `a3cube_${Date.now()}`
  const callbackUrl = new URL(`/api/paystack/verify?reference=${reference}`, request.url).toString()

  if (!process.env.PAYSTACK_SECRET_KEY) {
    return NextResponse.redirect(new URL(`/dashboard/releases?payment=demo&reference=${reference}`, request.url), { status: 303 })
  }

  const response = await fetch("https://api.paystack.co/transaction/initialize", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({ email, amount, reference, callback_url: callbackUrl, metadata: { artist: form.get("artist"), title: form.get("title"), plan } }),
  })
  const payload = await response.json()
  if (!response.ok || !payload?.data?.authorization_url) {
    return NextResponse.json({ error: "Unable to initialize Paystack payment", details: payload }, { status: 502 })
  }
  return NextResponse.redirect(payload.data.authorization_url, { status: 303 })
}
