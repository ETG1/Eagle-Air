import { Metadata } from 'next'

const defaultMetadata: Metadata = {
  title: 'Eagle Air - Aviation Training Excellence',
  description: 'Premier aviation training school offering comprehensive flight training programs, from private pilot licenses to advanced certifications.',
  keywords: [
    'flight training',
    'aviation school',
    'pilot license',
    'PPL',
    'CPL',
    'flight instructor',
    'aviation training',
    'flying lessons',
  ],
  authors: [{ name: 'Eagle Air Flight Training' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eagleair.com',
    siteName: 'Eagle Air Flight Training',
    title: 'Eagle Air - Aviation Training Excellence',
    description: 'Premier aviation training school offering comprehensive flight training programs.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Eagle Air Flight Training',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eagle Air - Aviation Training Excellence',
    description: 'Premier aviation training school offering comprehensive flight training programs.',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  verification: {
    google: 'your-google-site-verification',
  },
}

export default defaultMetadata 