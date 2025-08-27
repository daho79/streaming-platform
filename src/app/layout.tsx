import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'StreamDZD - Your Ultimate Streaming Platform',
  description: 'Watch movies, TV shows, and live streams. Unlimited entertainment at your fingertips.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="bg-primary text-secondary min-h-screen">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}