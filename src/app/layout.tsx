import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './ui/navbar/navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mac and Son Construction Website',
  description: 'Mac and Son Construction Service Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  )
}
