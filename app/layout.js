import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Tuposerve - Your Trusted Service Marketplace in Nairobi",
  description:
    "Connect with vetted, reliable service professionals in Nairobi. From house girls to mechanics and 50+ other trades.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
