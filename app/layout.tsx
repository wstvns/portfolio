import './globals.css'
import { Inter } from 'next/font/google'
import { ClientProviders } from './components/ClientProviders'
import { Contact } from './components/Contact'
import ScrollToTop from './components/ScrollToTop'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Wallisson Stevan - Desenvolvedor Full Stack',
  description: 'Desenvolvedor Full Stack apaixonado por tecnologia e inovação.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} font-sans antialiased`}>
      <body className="min-h-screen bg-background text-foreground relative flex flex-col">
        <ClientProviders />
        <main className="relative z-10 flex-grow">
          {children}
          <ScrollToTop />
        </main>
        <Contact />
      </body>
    </html>
  )
} 