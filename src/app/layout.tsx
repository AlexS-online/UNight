import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import { ThemeProvider } from '@/context/ThemeContext'
import ThemeAwareContent from '@/components/ThemeAwareContent/ThemeAwareContent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Unight Hostel',
  description: 'Welcome to Unight Hostel - Your home away from home',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="background-pattern" />
        <LanguageProvider>
          <ThemeProvider>
            <ThemeAwareContent>
              {children}
            </ThemeAwareContent>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
} 