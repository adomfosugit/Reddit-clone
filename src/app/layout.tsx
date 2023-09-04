"use client"
import Navbar from '@/components/Navbar/Navbar'
import './global.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { RecoilRoot } from 'recoil'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Reddit Clone',
  description: 'Tutorial Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <RecoilRoot>
       <html lang="en">
        <body className={`${inter.className} bg-gray-200`}>
          <Navbar />
          {children}
        </body>
        </html>
      </RecoilRoot>
  )
}
