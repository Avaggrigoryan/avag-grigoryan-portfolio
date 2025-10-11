import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Avag Grigoryan — Finance & Enterprise Automation Specialist',
  description: 'Portfolio of Avag Grigoryan, a finance professional specializing in accounting, analysis, and enterprise automation. Experience in ERP implementation, financial modeling, and business process improvement.',
  keywords: 'finance, accounting, ERP, automation, financial analysis, IFRS, enterprise systems, Armenia',
  authors: [{ name: 'Avag Grigoryan' }],
  creator: 'Avag Grigoryan',
  publisher: 'Avag Grigoryan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://avaggrigoryan.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Avag Grigoryan — Finance & Enterprise Automation Specialist',
    description: 'Portfolio of Avag Grigoryan, a finance professional specializing in accounting, analysis, and enterprise automation.',
    url: 'https://avaggrigoryan.com',
    siteName: 'Avag Grigoryan Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Avag Grigoryan - Finance & Enterprise Automation Specialist',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avag Grigoryan — Finance & Enterprise Automation Specialist',
    description: 'Portfolio of Avag Grigoryan, a finance professional specializing in accounting, analysis, and enterprise automation.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Avag Grigoryan",
              "jobTitle": "Finance & Enterprise Automation Specialist",
              "description": "Finance professional specializing in accounting, analysis, and enterprise automation with experience in ERP implementation and financial modeling.",
              "url": "https://avaggrigoryan.com",
              "image": "https://avaggrigoryan.com/og-image.jpg",
              "sameAs": [
                "https://linkedin.com/in/avag-grigoryan",
                "https://github.com/avag-grigoryan"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Armsoft",
                "jobTitle": "FinTech Role Engineer / Economist"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Bachelor's in Accounting, Taxation, and Economics"
              },
              "knowsAbout": [
                "Finance",
                "Accounting",
                "ERP Systems",
                "Enterprise Automation",
                "Financial Analysis",
                "IFRS",
                "Business Process Optimization"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Finance & Enterprise Automation Specialist",
                "occupationLocation": {
                  "@type": "Country",
                  "name": "Armenia"
                }
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <CustomCursor />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
