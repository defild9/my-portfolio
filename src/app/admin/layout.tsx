import Sidebar from '@/components/Sidebar/Sidebar'
import { authConfig } from '@/config/auth'
import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin Panel'
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession(authConfig)
  return (
    <div className="flex h-screen">
      <Sidebar userEmail={session?.user?.email} />
      <div className="flex-1 p-10 overflow-auto">
        {children}
      </div>
    </div>
  )
}
