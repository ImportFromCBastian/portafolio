import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Portafolio',
  description:
    'Portafolio de proyectos personales y profesionales de desarrollo web, diseño gráfico y otras habilidades creativas. Aquí encontrarás una selección de mis trabajos más destacados, incluyendo aplicaciones web, sitios web, diseños gráficos y más. Cada proyecto incluye detalles sobre las tecnologías utilizadas, el proceso de desarrollo y los resultados obtenidos. ¡Explora mi portafolio para conocer más sobre mis habilidades y experiencia en el mundo del desarrollo y diseño!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} antialiased grid min-h-dvh grid-cols-[1fr] grid-rows-[max-content_1fr_max-content] bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
