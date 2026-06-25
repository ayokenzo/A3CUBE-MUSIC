export const pricingPlans = [
  { name: "Starter", price: "₦7,500", description: "Launch a single with core store delivery.", features: ["1 release", "30+ DSPs", "UPC/ISRC included", "Email support"] },
  { name: "Pro", price: "₦18,000", description: "Best for artists with frequent campaigns.", features: ["5 releases", "Priority review", "Pre-save landing pages", "Monthly royalty reports"], highlighted: true },
  { name: "Label", price: "Custom", description: "Scale catalog management for teams.", features: ["Unlimited artists", "Bulk uploads", "Dedicated admin queue", "Custom split reporting"] },
]

export const releases = [
  { title: "Neon Roads", artist: "Mira Vale", type: "Single", status: "Live", stores: 42, revenue: "₦248,900" },
  { title: "Lagos After Dark", artist: "Kxng Sol", type: "EP", status: "In Review", stores: 0, revenue: "₦0" },
  { title: "Satellite Heart", artist: "Ayo Nova", type: "Album", status: "Needs Edits", stores: 0, revenue: "₦31,200" },
]

export const earnings = [
  { source: "Spotify", amount: "₦184,320", change: "+18%" },
  { source: "Apple Music", amount: "₦96,780", change: "+9%" },
  { source: "Boomplay", amount: "₦72,440", change: "+24%" },
]

export const reviewQueue = [
  { id: "REL-1048", title: "Lagos After Dark", artist: "Kxng Sol", submitted: "Jun 23, 2026", risk: "Low" },
  { id: "REL-1049", title: "Rain Signal", artist: "DJ Mara", submitted: "Jun 24, 2026", risk: "Medium" },
  { id: "REL-1050", title: "Gold Dust", artist: "The Vibes", submitted: "Jun 25, 2026", risk: "Low" },
]
