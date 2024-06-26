import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CrispProvider  from "../components/crisp-provider"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IntelliFlow',
  description: 'AI Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider/>
          <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
