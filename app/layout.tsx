import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "A3CUBE Music | Distribution for independent artists",
  description: "Release music, track earnings, and manage approvals on A3CUBE Music.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
