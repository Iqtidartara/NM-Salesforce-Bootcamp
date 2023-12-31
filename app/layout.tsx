import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const poppins = Poppins({
  weight: ['800', '700', '600', '500','400', '300'],
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  icons:"/hands.png",
  title: 'NM Salesforce Bootcamp',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={poppins.className}>{children}
      <Toaster/>
      </body>
    </html>
  )
}
