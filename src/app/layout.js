import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Tuposerve - Your Trusted Service Marketplace in Nairobi",
  description:
    "Connect with certified, reliable service professionals in Nairobi. From house girls to mechanics and 50+ other trades. Quality service you can trust.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-light text-neutral-dark`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
