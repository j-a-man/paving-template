import type { Metadata } from "next"
import { Poppins } from "next/font/google" // <--- Changed from Geist/Inter
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

// Configure Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Load multiple weights
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Five Star ATM",
  description: "Reliable ATM solutions for your business.",
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
        <Toaster />
      </body>
    </html>
  )
}