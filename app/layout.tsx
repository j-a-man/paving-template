import type { Metadata } from "next"
import { Poppins } from "next/font/google" // <--- Changed from Geist/Inter
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import Chatbot from "@/components/chatbot"

// Configure Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Load multiple weights
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Tallahassee Energy Solutions | Energy you can trust",
  description: "Reliable electrical solutions for your home and business. From rewiring to panel upgrades, we keep your property safe and powered.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Chatbot />
        <Toaster />
      </body>
    </html>
  )
}