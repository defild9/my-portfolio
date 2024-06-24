import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { connectToMongoDB } from '@/lib/db'
import Providers from '@/components/Providers/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yevhenii Biletskyi | Fullstack developer',
  description:
    "I'm Yevhenii Biletskyi, a young and ambitious full-stack developer with a strong background in web development. Specializing in technologies like JavaScript/TypeScript, NodeJS, ASP.NET, HTML/CSS, and React/NextJS, I am passionate about creating innovative web applications using cutting-edge technologies. I thrive in dynamic team environments where I can contribute my skills and continue to grow as a professional. My dedication to continuous learning and improvement drives me to stay updated with the latest industry trends. Let's create something amazing together!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  connectToMongoDB()
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
