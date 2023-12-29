import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const poppins = Poppins({weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Food Recipe App',
  description: 'This is a recipe app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className} >
        <Providers>
          <NavBar />
          {children}
        </Providers>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
