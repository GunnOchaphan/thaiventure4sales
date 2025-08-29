// app/layout.tsx
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { ReactNode } from 'react'
import Contact from '@/components/Contact'

export const metadata = {
  title: 'Business for sales',
  description: 'Landing page built with Next.js App Router',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Contact />
        <Footer />
      </body>
    </html>
  )
}
